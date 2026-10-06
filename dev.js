const { spawn } = require('node:child_process');
const net = require('node:net');
const path = require('node:path');

const root = __dirname;
const backend = path.join(root, 'backend');
const python = process.env.PYTHON || 'python';
const children = [];
let shuttingDown = false;

function isPortAvailable(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      server.close(() => resolve(true));
    });
  });
}

async function findPort(startPort) {
  for (let port = startPort; port < startPort + 100; port += 1) {
    try {
      await isPortAvailable(port);
      return port;
    } catch (error) {
      if (error.code !== 'EADDRINUSE') throw error;
    }
  }
  throw new Error(`No available port found starting at ${startPort}.`);
}

function start(name, args, cwd) {
  const child = spawn(python, args, { cwd, stdio: 'inherit' });
  children.push(child);

  child.once('error', (error) => {
    console.error(`Could not start ${name}: ${error.message}`);
    shutdown(1);
  });
  child.once('exit', (code) => {
    if (!shuttingDown) {
      console.error(`${name} stopped${code === 0 ? '.' : ` with exit code ${code ?? 1}.`}`);
      shutdown(code || 1);
    }
  });
}

function shutdown(exitCode = 0) {
  if (shuttingDown) return;
  shuttingDown = true;
  for (const child of children) {
    if (child.exitCode === null && !child.killed) child.kill();
  }
  process.exitCode = exitCode;
}

process.on('SIGINT', () => shutdown());
process.on('SIGTERM', () => shutdown());

async function main() {
  const frontendPort = await findPort(5500);
  const backendPort = await findPort(8000);

  console.log(`Frontend: http://127.0.0.1:${frontendPort}/dashboard.html`);
  console.log(`Backend:  http://127.0.0.1:${backendPort}/api/`);

  start('Frontend', ['-m', 'http.server', String(frontendPort), '--bind', '127.0.0.1'], root);
  start('Django', ['manage.py', 'runserver', `127.0.0.1:${backendPort}`], backend);
}

main().catch((error) => {
  console.error(error.message);
  shutdown(1);
});
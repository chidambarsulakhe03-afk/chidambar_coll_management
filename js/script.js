const studentData = [
  {
    id: 'STU-2024-101',
    name: 'Aarav Sharma',
    usn: '1MS20CS001',
    email: 'aarav.sharma@example.com',
    phone: '+91 9876543210',
    department: 'Computer Science',
    course: 'B.E. Computer Science',
    semester: '6',
    gender: 'Male',
    dob: '2002-08-15',
    address: '45 MG Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    status: 'Active',
    admissionDate: '2020-08-10',
    avatar: 'AS'
  },
  {
    id: 'STU-2024-102',
    name: 'Meera Iyer',
    usn: '1MS20EC020',
    email: 'meera.iyer@example.com',
    phone: '+91 9123456780',
    department: 'Electronics',
    course: 'B.E. ECE',
    semester: '5',
    gender: 'Female',
    dob: '2003-04-12',
    address: '12 Residency Road',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    status: 'Active',
    admissionDate: '2021-08-11',
    avatar: 'MI'
  },
  {
    id: 'STU-2024-103',
    name: 'Rohit Nair',
    usn: '1MS20ME015',
    email: 'rohit.nair@example.com',
    phone: '+91 9988776655',
    department: 'Mechanical',
    course: 'B.E. Mechanical',
    semester: '7',
    gender: 'Male',
    dob: '2001-12-02',
    address: '78 Vasanth Nagar',
    city: 'Kochi',
    state: 'Kerala',
    pincode: '682001',
    status: 'Inactive',
    admissionDate: '2019-08-08',
    avatar: 'RN'
  },
  {
    id: 'STU-2024-104',
    name: 'Sana Khan',
    usn: '1MS20IT044',
    email: 'sana.khan@example.com',
    phone: '+91 9090909090',
    department: 'Information Technology',
    course: 'B.Tech IT',
    semester: '6',
    gender: 'Female',
    dob: '2002-02-10',
    address: '9 Lake View',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    status: 'Active',
    admissionDate: '2020-09-05',
    avatar: 'SK'
  },
  {
    id: 'STU-2024-105',
    name: 'Vikram Rao',
    usn: '1MS20CV037',
    email: 'vikram.rao@example.com',
    phone: '+91 9812345678',
    department: 'Civil',
    course: 'B.E. Civil',
    semester: '4',
    gender: 'Male',
    dob: '2003-06-22',
    address: '32 Kanakapura Road',
    city: 'Mysuru',
    state: 'Karnataka',
    pincode: '570001',
    status: 'Active',
    admissionDate: '2022-08-14',
    avatar: 'VR'
  },
  {
    id: 'STU-2024-106',
    name: 'Priya Natarajan',
    usn: '1MS20EE011',
    email: 'priya.natarajan@example.com',
    phone: '+91 9345678901',
    department: 'Electrical',
    course: 'B.E. Electrical',
    semester: '8',
    gender: 'Female',
    dob: '2001-11-08',
    address: '19 Anna Salai',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641001',
    status: 'Active',
    admissionDate: '2018-08-22',
    avatar: 'PN'
  },
  {
    id: 'STU-2024-107',
    name: 'Karthik Menon',
    usn: '1MS20AI026',
    email: 'karthik.menon@example.com',
    phone: '+91 9765432109',
    department: 'Artificial Intelligence',
    course: 'B.Tech AI & DS',
    semester: '6',
    gender: 'Male',
    dob: '2002-03-18',
    address: '14 Baner Road',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411045',
    status: 'Active',
    admissionDate: '2020-08-09',
    avatar: 'KM'
  },
  {
    id: 'STU-2024-108',
    name: 'Ananya Das',
    usn: '1MS20BT012',
    email: 'ananya.das@example.com',
    phone: '+91 9445566778',
    department: 'Biotechnology',
    course: 'B.Tech Biotechnology',
    semester: '5',
    gender: 'Female',
    dob: '2003-01-27',
    address: '27 Park Street',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700001',
    status: 'Inactive',
    admissionDate: '2021-08-16',
    avatar: 'AD'
  },
  {
    id: 'STU-2024-109',
    name: 'Harish Patel',
    usn: '1MS20ME062',
    email: 'harish.patel@example.com',
    phone: '+91 9023456781',
    department: 'Mechanical',
    course: 'B.E. Mechanical',
    semester: '3',
    gender: 'Male',
    dob: '2004-05-30',
    address: '54 Riverfront Avenue',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380001',
    status: 'Active',
    admissionDate: '2023-08-14',
    avatar: 'HP'
  },
  {
    id: 'STU-2024-110',
    name: 'Nisha Verma',
    usn: '1MS20CS080',
    email: 'nisha.verma@example.com',
    phone: '+91 9123456789',
    department: 'Computer Science',
    course: 'B.E. Computer Science',
    semester: '7',
    gender: 'Female',
    dob: '2002-09-12',
    address: '8 Sector 15',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    status: 'Active',
    admissionDate: '2019-08-15',
    avatar: 'NV'
  },
  {
    id: 'STU-2024-111',
    name: 'Dhanush Gowda',
    usn: '1MS20EC045',
    email: 'dhanush.gowda@example.com',
    phone: '+91 9876012345',
    department: 'Electronics',
    course: 'B.E. ECE',
    semester: '4',
    gender: 'Male',
    dob: '2003-07-19',
    address: '90 Airport Road',
    city: 'Mangaluru',
    state: 'Karnataka',
    pincode: '575001',
    status: 'Active',
    admissionDate: '2022-08-11',
    avatar: 'DG'
  },
  {
    id: 'STU-2024-112',
    name: 'Ishita Bose',
    usn: '1MS20IT098',
    email: 'ishita.bose@example.com',
    phone: '+91 9789654321',
    department: 'Information Technology',
    course: 'B.Tech IT',
    semester: '8',
    gender: 'Female',
    dob: '2001-10-04',
    address: '13 New Town',
    city: 'Bhubaneswar',
    state: 'Odisha',
    pincode: '751001',
    status: 'Inactive',
    admissionDate: '2018-08-03',
    avatar: 'IB'
  }
];

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast-box ${type}`;
  toast.innerHTML = `
    <i class="bi ${type === 'success' ? 'bi-check-circle-fill text-success' : type === 'error' ? 'bi-x-circle-fill text-danger' : 'bi-exclamation-triangle-fill text-warning'}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2800);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

function togglePasswordVisibility(button) {
  const input = document.getElementById(button.dataset.target);
  if (!input) return;
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  button.innerHTML = isPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
  button.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
}

function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const toggle = document.querySelector('[data-sidebar-toggle]');

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay?.classList.toggle('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar?.classList.remove('open');
      overlay.classList.remove('show');
    });
  }
}

function initPasswordToggles() {
  document.querySelectorAll('[data-password-toggle]').forEach((button) => {
    button.addEventListener('click', () => togglePasswordVisibility(button));
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(input, message) {
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid', 'true');

  let feedback = input.parentElement.querySelector('.invalid-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'invalid-feedback d-block';
    input.parentElement.appendChild(feedback);
  }
  feedback.textContent = message;
}

function clearFieldError(input) {
  input.classList.remove('is-invalid');
  input.removeAttribute('aria-invalid');
  const feedback = input.parentElement.querySelector('.invalid-feedback');
  if (feedback) feedback.remove();
}

function validateForm(form) {
  let isValid = true;

  form.querySelectorAll('input, select, textarea').forEach((field) => {
    if (field.hasAttribute('required') && !field.value.trim()) {
      setFieldError(field, `${field.previousElementSibling?.textContent || field.name || 'This field'} is required.`);
      isValid = false;
      return;
    }

    if (field.type === 'email' && field.value.trim() && !validateEmail(field.value.trim())) {
      setFieldError(field, 'Please enter a valid email address.');
      isValid = false;
      return;
    }

    if (field.name === 'confirmPassword' || field.id === 'confirmPassword') {
      const password = form.querySelector('#password');
      if (field.value && password && field.value !== password.value) {
        setFieldError(field, 'Passwords do not match.');
        isValid = false;
        return;
      }
    }

    if (field.name === 'password' && field.value.length > 0 && field.value.length < 8) {
      setFieldError(field, 'Password must be at least 8 characters long.');
      isValid = false;
      return;
    }

    clearFieldError(field);
  });

  return isValid;
}

function initFormValidation() {
  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      const valid = validateForm(form);
      if (!valid) {
        event.preventDefault();
        showToast('Please correct the highlighted fields.', 'error');
      }
    });

    form.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        if (field.classList.contains('is-invalid')) {
          if (!field.hasAttribute('required') || field.value.trim()) {
            clearFieldError(field);
          }
        }
      });
    });
  });
}

function initDarkMode() {
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const saved = localStorage.getItem('student-theme');

  if (saved === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
  }

  toggles.forEach((toggle) => {
    const isSwitch = toggle.classList.contains('toggle-switch');
    const updateToggleVisual = () => {
      const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      if (isSwitch) {
        toggle.classList.toggle('active', currentTheme === 'dark');
      } else {
        toggle.innerHTML = currentTheme === 'dark' ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
      }
    };

    updateToggleVisual();

    toggle.addEventListener('click', () => {
      const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('student-theme', nextTheme);
      updateToggleVisual();
    });
  });
}

function getFilteredStudents(searchText = '', department = 'All', semester = 'All', gender = 'All') {
  const query = searchText.toLowerCase().trim();

  return studentData.filter((student) => {
    const matchesSearch = !query || [student.name, student.id, student.usn, student.email].join(' ').toLowerCase().includes(query);
    const matchesDepartment = department === 'All' || student.department === department;
    const matchesSemester = semester === 'All' || student.semester === semester;
    const matchesGender = gender === 'All' || student.gender === gender;

    return matchesSearch && matchesDepartment && matchesSemester && matchesGender;
  });
}

function renderStudentsTable(rows) {
  const tableBody = document.getElementById('studentsTableBody');
  if (!tableBody) return;

  if (!rows.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="10">
          <div class="empty-state">
            <i class="bi bi-search"></i>
            <h5>No students found</h5>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = rows.map((student) => `
    <tr>
      <td>
        <div class="student-meta">
          <div class="student-avatar">${student.avatar}</div>
        </div>
      </td>
      <td>
        <p class="student-name">${student.name}</p>
      </td>
      <td>${student.id}</td>
      <td>${student.usn}</td>
      <td>${student.email}</td>
      <td>${student.department}</td>
      <td>${student.semester}</td>
      <td>${student.phone}</td>
      <td>
        <span class="badge ${student.status === 'Active' ? 'badge-success' : 'badge-warning'}">${student.status}</span>
      </td>
      <td>
        <div class="action-group">
          <a href="student-details.html" class="btn-icon" title="View student"><i class="bi bi-eye"></i></a>
          <a href="edit-student.html" class="btn-icon" title="Edit student"><i class="bi bi-pencil-square"></i></a>
          <button class="btn-icon" title="Delete student" data-delete-student><i class="bi bi-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderRecentStudents() {
  const recentTable = document.getElementById('recentStudentsBody');
  if (!recentTable) return;

  recentTable.innerHTML = studentData.slice(0, 5).map((student) => `
    <tr>
      <td>
        <div class="student-meta">
          <div class="student-avatar">${student.avatar}</div>
          <div>
            <p class="student-name">${student.name}</p>
          </div>
        </div>
      </td>
      <td>${student.usn}</td>
      <td>${student.department}</td>
      <td>${student.semester}</td>
      <td>${new Date(student.admissionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
      <td><span class="badge ${student.status === 'Active' ? 'badge-success' : 'badge-warning'}">${student.status}</span></td>
      <td>
        <div class="action-group">
          <a href="student-details.html" class="btn btn-sm btn-outline-primary">View</a>
          <a href="edit-student.html" class="btn btn-sm btn-light">Edit</a>
        </div>
      </td>
    </tr>
  `).join('');
}

function initStudentSearch() {
  const searchInput = document.getElementById('studentSearchInput');
  const departmentFilter = document.getElementById('departmentFilter');
  const semesterFilter = document.getElementById('semesterFilter');
  const genderFilter = document.getElementById('genderFilter');
  const resultsCount = document.getElementById('resultsCount');

  if (!searchInput) return;

  const updateTable = () => {
    const results = getFilteredStudents(
      searchInput.value,
      departmentFilter ? departmentFilter.value : 'All',
      semesterFilter ? semesterFilter.value : 'All',
      genderFilter ? genderFilter.value : 'All'
    );

    renderStudentsTable(results);
    if (resultsCount) {
      resultsCount.textContent = `${results.length} students found`;
    }
  };

  searchInput.addEventListener('input', updateTable);
  [departmentFilter, semesterFilter, genderFilter].forEach((filter) => filter && filter.addEventListener('change', updateTable));

  updateTable();
}

function initSearchPage() {
  const searchInput = document.getElementById('searchPageInput');
  const resultsCount = document.getElementById('searchResultsCount');
  const clearBtn = document.getElementById('clearSearch');

  if (!searchInput) return;

  const renderSearchCards = (query = '') => {
    const results = getFilteredStudents(query);
    const container = document.getElementById('searchResultsContainer');
    const empty = document.getElementById('searchEmptyState');

    if (resultsCount) {
      resultsCount.textContent = `${results.length} results`;
    }

    if (!container) return;

    if (!results.length) {
      container.innerHTML = '';
      empty?.classList.remove('d-none');
      return;
    }

    empty?.classList.add('d-none');
    container.innerHTML = results.map((student) => `
      <div class="result-card">
        <div class="student-meta mb-2">
          <div class="student-avatar">${student.avatar}</div>
          <div>
            <h5>${student.name}</h5>
            <span class="badge badge-secondary">${student.department}</span>
          </div>
        </div>
        <p><strong>ID:</strong> ${student.id}</p>
        <p><strong>USN:</strong> ${student.usn}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Semester:</strong> ${student.semester}</p>
        <div class="action-group mt-3">
          <a href="student-details.html" class="btn btn-sm btn-outline-primary">View</a>
          <a href="edit-student.html" class="btn btn-sm btn-light">Edit</a>
        </div>
      </div>
    `).join('');
  };

  searchInput.addEventListener('input', (event) => renderSearchCards(event.target.value));
  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    renderSearchCards('');
  });

  renderSearchCards('');
}

function initDeleteModal() {
  const modal = document.getElementById('deleteStudentModal');
  if (!modal) return;

  const deleteButton = document.getElementById('confirmDeleteButton');
  const triggerButtons = document.querySelectorAll('[data-delete-student]');

  let currentTarget = null;

  triggerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentTarget = button.closest('tr');
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    });
  });

  deleteButton?.addEventListener('click', () => {
    if (currentTarget) {
      currentTarget.remove();
    }

    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance?.hide();
    showToast('Student deleted successfully.', 'success');
  });
}

function initAddEditForms() {
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.dataset.redirect) return;
      event.preventDefault();
      if (!validateForm(form)) {
        showToast('Please correct the highlighted fields.', 'error');
        return;
      }

      const message = form.dataset.mode === 'edit' ? 'Student updated successfully.' : 'Student added successfully.';
      showToast(message, 'success');

      setTimeout(() => {
        window.location.href = form.dataset.redirect;
      }, 900);
    });
  });
}

function initHomePage() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('loginEmail');
      const password = document.getElementById('loginPassword');
      let valid = true;

      if (!email.value.trim()) {
        setFieldError(email, 'Email is required.');
        valid = false;
      } else if (!validateEmail(email.value.trim())) {
        setFieldError(email, 'Please enter a valid email address.');
        valid = false;
      } else {
        clearFieldError(email);
      }

      if (!password.value.trim()) {
        setFieldError(password, 'Password is required.');
        valid = false;
      } else if (password.value.length < 8) {
        setFieldError(password, 'Password must be at least 8 characters long.');
        valid = false;
      } else {
        clearFieldError(password);
      }

      if (!valid) {
        showToast('Please correct the highlighted fields.', 'error');
        return;
      }

      showToast('Login successful.', 'success');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 700);
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!validateForm(registerForm)) {
        showToast('Please complete the registration form correctly.', 'error');
        return;
      }
      showToast('Account created successfully.', 'success');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 900);
    });
  }
}

function initPage() {
  initSidebar();
  initPasswordToggles();
  initFormValidation();
  initDarkMode();
  initDeleteModal();
  initHomePage();
  initAddEditForms();
  initStudentSearch();
  initSearchPage();
  renderRecentStudents();

  if (typeof Chart !== 'undefined') {
    initDashboardCharts();
  }
}

function initDashboardCharts() {
  const departmentChart = document.getElementById('departmentChart');
  const genderChart = document.getElementById('genderChart');

  if (departmentChart) {
    const values = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'IT', 'AI'];
    const counts = [320, 240, 180, 150, 200, 120];

    new Chart(departmentChart, {
      type: 'bar',
      data: {
        labels: values,
        datasets: [{
          label: 'Students',
          data: counts,
          backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#2563eb', '#1d4ed8', '#0ea5e9'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(148, 163, 184, 0.12)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }

  if (genderChart) {
    new Chart(genderChart, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [720, 528],
          backgroundColor: ['#3b82f6', '#f472b6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        cutout: '70%'
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initPage);

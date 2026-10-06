import json

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from .models import Student


@require_http_methods(["GET"])
def index(request):
    return JsonResponse({
        'message': 'Student Management System backend is running.',
        'status': 'ok',
        'app': 'students',
    })


@require_http_methods(["GET"])
def dashboard_summary(request):
    students = Student.objects.all()
    total_students = students.count()
    male_students = students.filter(gender='Male').count()
    female_students = students.filter(gender='Female').count()
    departments = sorted({student.department for student in students})

    return JsonResponse({
        'total_students': total_students,
        'male_students': male_students,
        'female_students': female_students,
        'departments': len(departments),
        'department_names': departments,
    })


@require_http_methods(["GET"])
def student_list(request):
    students = Student.objects.all()
    data = [
        {
            'id': student.id,
            'student_id': student.student_id,
            'full_name': student.full_name,
            'usn': student.usn,
            'email': student.email,
            'phone': student.phone,
            'department': student.department,
            'course': student.course,
            'semester': student.semester,
            'gender': student.gender,
            'dob': student.dob.isoformat(),
            'address': student.address,
            'city': student.city,
            'state': student.state,
            'pincode': student.pincode,
            'admission_date': student.admission_date.isoformat(),
            'status': student.status,
        }
        for student in students
    ]
    return JsonResponse({'students': data}, safe=False)


@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def student_detail(request, pk):
    student = Student.objects.filter(pk=pk).first()
    if not student:
        return JsonResponse({'error': 'Student not found'}, status=404)

    if request.method == 'GET':
        return JsonResponse({
            'id': student.id,
            'student_id': student.student_id,
            'full_name': student.full_name,
            'usn': student.usn,
            'email': student.email,
            'phone': student.phone,
            'department': student.department,
            'course': student.course,
            'semester': student.semester,
            'gender': student.gender,
            'dob': student.dob.isoformat(),
            'address': student.address,
            'city': student.city,
            'state': student.state,
            'pincode': student.pincode,
            'admission_date': student.admission_date.isoformat(),
            'status': student.status,
        })

    if request.method in {'POST', 'PUT'}:
        payload = json.loads(request.body or '{}')
        for field in ['full_name', 'usn', 'email', 'phone', 'department', 'course', 'semester', 'gender', 'dob', 'address', 'city', 'state', 'pincode', 'admission_date', 'status']:
            if field in payload:
                setattr(student, field, payload[field])
        student.save()
        return JsonResponse({'message': 'Student updated successfully.'})

    if request.method == 'DELETE':
        student.delete()
        return JsonResponse({'message': 'Student deleted successfully.'})

    return JsonResponse({'error': 'Method not allowed'}, status=405)

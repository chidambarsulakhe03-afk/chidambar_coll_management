from django.core.management.base import BaseCommand

from students.models import Student


class Command(BaseCommand):
    help = 'Seed the database with sample student data for the Student Management System.'

    def handle(self, *args, **options):
        students = [
            {
                'student_id': 'STU-2024-101',
                'full_name': 'Aarav Sharma',
                'usn': '1MS20CS001',
                'email': 'aarav.sharma@example.com',
                'phone': '+91 9876543210',
                'department': 'Computer Science',
                'course': 'B.E. Computer Science',
                'semester': 6,
                'gender': 'Male',
                'dob': '2002-08-15',
                'address': '45 MG Road',
                'city': 'Bengaluru',
                'state': 'Karnataka',
                'pincode': '560001',
                'admission_date': '2020-08-10',
                'status': 'Active',
            },
            {
                'student_id': 'STU-2024-102',
                'full_name': 'Meera Iyer',
                'usn': '1MS20EC020',
                'email': 'meera.iyer@example.com',
                'phone': '+91 9123456780',
                'department': 'Electronics',
                'course': 'B.E. ECE',
                'semester': 5,
                'gender': 'Female',
                'dob': '2003-04-12',
                'address': '12 Residency Road',
                'city': 'Chennai',
                'state': 'Tamil Nadu',
                'pincode': '600001',
                'admission_date': '2021-08-11',
                'status': 'Active',
            },
            {
                'student_id': 'STU-2024-103',
                'full_name': 'Rohit Nair',
                'usn': '1MS20ME015',
                'email': 'rohit.nair@example.com',
                'phone': '+91 9988776655',
                'department': 'Mechanical',
                'course': 'B.E. Mechanical',
                'semester': 7,
                'gender': 'Male',
                'dob': '2001-12-02',
                'address': '78 Vasanth Nagar',
                'city': 'Kochi',
                'state': 'Kerala',
                'pincode': '682001',
                'admission_date': '2019-08-08',
                'status': 'Inactive',
            },
            {
                'student_id': 'STU-2024-104',
                'full_name': 'Sana Khan',
                'usn': '1MS20IT044',
                'email': 'sana.khan@example.com',
                'phone': '+91 9090909090',
                'department': 'Information Technology',
                'course': 'B.Tech IT',
                'semester': 6,
                'gender': 'Female',
                'dob': '2002-02-10',
                'address': '9 Lake View',
                'city': 'Hyderabad',
                'state': 'Telangana',
                'pincode': '500001',
                'admission_date': '2020-09-05',
                'status': 'Active',
            },
            {
                'student_id': 'STU-2024-105',
                'full_name': 'Vikram Rao',
                'usn': '1MS20CV037',
                'email': 'vikram.rao@example.com',
                'phone': '+91 9812345678',
                'department': 'Civil',
                'course': 'B.E. Civil',
                'semester': 4,
                'gender': 'Male',
                'dob': '2003-06-22',
                'address': '32 Kanakapura Road',
                'city': 'Mysuru',
                'state': 'Karnataka',
                'pincode': '570001',
                'admission_date': '2022-08-14',
                'status': 'Active',
            },
        ]

        for student_data in students:
            Student.objects.update_or_create(
                student_id=student_data['student_id'],
                defaults=student_data,
            )

        self.stdout.write(self.style.SUCCESS(f'Seeded {len(students)} sample students.'))

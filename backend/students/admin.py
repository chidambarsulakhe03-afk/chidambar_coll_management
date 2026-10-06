from django.contrib import admin

from .models import Student


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'student_id', 'usn', 'department', 'semester', 'status')
    search_fields = ('full_name', 'student_id', 'usn', 'email')
    list_filter = ('department', 'semester', 'status')

from django.urls import path

from .views import dashboard_summary, index, student_detail, student_list

urlpatterns = [
    path('', index, name='backend-home'),
    path('students/', student_list, name='student-list'),
    path('students/<int:pk>/', student_detail, name='student-detail'),
    path('dashboard/', dashboard_summary, name='dashboard-summary'),
]

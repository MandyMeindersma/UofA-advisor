from django.urls import path

from .views import CourseListView, CourseDetailView
from .views import FacultyListView, FacultyDetailView
from .views import DepartmentListView, DepartmentDetailView
from .views import ProgramListView, ProgramDetailView

urlpatterns = [
    path('course/', CourseListView.as_view()),
    path('course/<pk>',CourseDetailView.as_view()),
    
    path('faculty/', FacultyListView.as_view()),
    path('faculty/<pk>',FacultyDetailView.as_view()),
    
    path('department/', DepartmentListView.as_view()),
    path('department/<pk>',DepartmentDetailView.as_view()),
    
    path('program/', ProgramListView.as_view()),
    path('program/<pk>',ProgramDetailView.as_view()),
]
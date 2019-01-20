from rest_framework.generics import ListAPIView, RetrieveAPIView
from courses.models import Course, Faculty, Department, Program
from .serializers import CourseSerializer, FacultySerializer, DepartmentSerializer, ProgramSerializer

class CourseListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetailView(RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class FacultyDetailView(RetrieveAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class FacultyListView(ListAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class DepartmentDetailView(RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    
class DepartmentListView(ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class ProgramDetailView(RetrieveAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class ProgramListView(ListAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer


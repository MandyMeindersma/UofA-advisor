from rest_framework.generics import ListAPIView, RetrieveAPIView
from courses.models import Course, Faculty, Department, Program
from .serializers import CourseSerializer, FacultySerializer, DepartmentSerializer, ProgramSerializer

class CourseListView(ListAPIView):
    queryset = Course.objects.all() 
    serializer_class = CourseSerializer
   

    def get_queryset(self):
        queryset = Course.objects.all()

        course_name = self.request.query_params.get('course_name', None)
        if course_name is not None :
            queryset = queryset.filter(course_name=course_name)

        return queryset

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

    def get_queryset(self):
        queryset = Department.objects.all()
        print(self.request.query_params)
        faculty_id = self.request.query_params.get('faculty_id', None)
        if faculty_id is not None:
            queryset = queryset.filter(faculty_id=faculty_id)
        print(faculty_id)
        return queryset
    '''
    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        queryset = Purchase.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            queryset = queryset.filter(purchaser__username=username)
        return queryset
    '''
    serializer_class = DepartmentSerializer

class ProgramDetailView(RetrieveAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class ProgramListView(ListAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer


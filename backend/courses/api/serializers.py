from rest_framework.serializers import ModelSerializer

from courses.models import Course, Faculty, Department, Program

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class FacultySerializer(ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'


class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class ProgramSerializer(ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'
from django.db import models

class Faculty(models.Model):
    faculty_name = models.CharField(max_length=128)
class Department(models.Model):
    department_name = models.CharField(max_length=128)
class Program(models.Model):
    program_name = models.CharField(max_length=128)

class FacultyDepartment(models.Model):
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name = 'parent')
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE, related_name = 'child')

    class Meta:
        unique_together = ('faculty_id', 'department_id')
class DepartmentProgram(models.Model):
    faculty_department_id = models.ForeignKey(FacultyDepartment, on_delete=models.CASCADE, related_name = 'parent')
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE, related_name = 'child')

    class Meta:
        unique_together = ('faculty_department_id', 'program_id')
# Create your models here.
class Course(models.Model):
    course_name = models.CharField(max_length=128)
    course_num = models.IntegerField()
    course_faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)
    def __str__(self):
        return "%s %s" % (self.course_name, self.course_num)
    class Meta:
        unique_together = ('course_name', 'course_num')
       
class CoursePrerequisite(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = 'child')
    course_prereq_id = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = 'parent')
    
    class Meta:
        unique_together = ('course_id', 'course_prereq_id')

class RequiredCourse(models.Model):
    department_program_id = models.ForeignKey(DepartmentProgram, on_delete=models.CASCADE,related_name="parent")
    course_required = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="child")

    class Meta:
        unique_together = ('department_program', 'course_required')

class RequiredCredit(models.Model):
    #e.g. biology specialization required credit
    department_program_id = models.ForeignKey(DepartmentProgram, on_delete=models.CASCADE, related_name="parent")
    #from the faculty
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name="child_faculty")
    #from the department, if value is null pick anything
    department_id = models.ForeignKey(Department on_delete=models.CASCADE, related_name="child_department",null=True)
    credits = models.IntegerField()






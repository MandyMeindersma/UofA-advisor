from django.db import models

class Faculty(models.Model):
    faculty_name = models.CharField(max_length=128)
class Department(models.Model):
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='faculty_id')
    department_name = models.CharField(max_length=128)
    class Meta:
        unique_together = ('faculty_id','department_name')
class Program(models.Model):
    program_name = models.CharField(max_length=128)
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='department_id')
    class Meta:
        unique_together = ('program_name','department_id')

class Course(models.Model):
    course_name = models.CharField(max_length=128)
    course_num = models.IntegerField()
    course_faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='course_faculty')
    course_department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='course_department')
    def __str__(self):
        return "%s %s" % (self.course_name, self.course_num)
    class Meta:
        unique_together = ('course_name', 'course_num')
 
class CoursePrerequisite(models.Model):
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = 'course_id')
    course_prereq_id = models.ForeignKey(Course, on_delete=models.CASCADE, related_name = 'course_prereq_id')
    
    class Meta:
        unique_together = ('course_id', 'course_prereq_id')


class RequiredCourse(models.Model):
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='program_id')
    course_required = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_required')

    class Meta:
        unique_together = ('program_id', 'course_required')

class RequiredCredit(models.Model):
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='program_id2')

    #credits you need from stuff below
    faculty_req_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='faculty_req_id')
    department_req_id = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='department_req_id', blank=True)
    req_credits = models.IntegerField()
    #e.g. biology specialization required credit
    #from the faculty
    #from the department, if value is null pick anything

    class Meta:
            unique_together = ('program_id','faculty_req_id','department_req_id')



'''
class FacultyDepartment(models.Model):
    faculty_id = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name = 'faculty')
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE, related_name = 'department')

    class Meta:
        unique_together = ('faculty_id', 'department_id')
class DepartmentProgram(models.Model):
    faculty_department_id = models.ForeignKey(FacultyDepartment, on_delete=models.CASCADE, related_name = 'facultyDepartment')
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE, related_name = 'program')

    class Meta:
        unique_together = ('faculty_department_id', 'program_id')

'''
# Create your models here.
      


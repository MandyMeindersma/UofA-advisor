'''
from django.shortcuts import render
from django.http import HttpResponse
from .models import Course
from .serializers import CourseSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['get'])
def fetch_courses(request):
    #fetch all the course objects
    courses = Course.objects.all()
    #send the course objects as a response
    serializer = CourseSerializer(courses, many=True)

    return Response(serializer.data)

'''
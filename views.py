from django.shortcuts import render
from django.http import HttpResponse
   
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import date
from .serializers import dserializers



# Create your views here.
#get api will return json back
class dateList(APIView):
    def get(self, request):
        date1 = date.objects.all()
        serializer = dserializers(date1, many = True)

        return Response(serializer.data)


    def post(self):
        pass
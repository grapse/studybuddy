from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FunctionSerializer
from .models import Function

class FunctionView(viewsets.ModelViewSet):
    serializer_class = FunctionSerializer
    queryset = Function.objects.all()
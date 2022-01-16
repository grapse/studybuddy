from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import DeckSerializer, FlashcardsSerializer, dserializers
from .models import Deck, Flashcards, date
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class DeckView(viewsets.ModelViewSet):
    serializer_class = DeckSerializer
    queryset = Deck.objects.all()
    http_method_names = ['get','post','head']

class FlashcardsView(viewsets.ModelViewSet):
    serializer_class = FlashcardsSerializer
    queryset = Flashcards.objects.all()
    http_method_names = ['get', 'post', 'head']

class dateList(viewsets.ModelViewSet):
    serializer_class = dserializers
    queryset = date.objects.all()
    http_method_names = ['get','post','head']
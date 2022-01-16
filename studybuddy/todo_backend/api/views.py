from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, DeckSerializer, FlashcardsSerializer
from .models import Todo, Deck, Flashcards


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class DeckView(viewsets.ModelViewSet):
    deck_class = DeckSerializer
    queryset = Deck.objects.all()
    http_method_names = ['get', 'head']

class FlashcardsView(viewsets.ModelViewSet):
    fc_class = FlashcardsSerializer
    queryset = Flashcards.objects.all()
    http_method_names = ['get', 'post', 'head']
from rest_framework import serializers
from .models import Todo, Deck, Flashcards, date

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed']

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = ['name']

class FlashcardsSerializer(serializers.ModelSerializer):
    deck=DeckSerializer().fields['name']
    def create(self, validated_data):
        dk = validated_data.pop('deck', None)
        if dk:
            deck = Deck.objects.get_or_create(name=dk)[0]
            validated_data['deck'] = deck
        return Flashcards.objects.create(**validated_data)

    class Meta:
        model = Flashcards
        fields = ['id', 'question', 'answer', 'deck']

class dserializers(serializers.ModelSerializer):

    class Meta:
        model = date
        fields  = ['id', 'date','month','year', 'Task', 'completed']
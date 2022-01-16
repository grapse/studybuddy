from django.db import models
from django.utils import timezone


class Deck(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Flashcards(models.Model):
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    '''user = models.ForeignKey(User,
                             related_name='flashcards',
                             on_delete=models.CASCADE)'''
    question = models.CharField(max_length=240)
    answer = models.CharField(max_length=240)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return "(" + self.question + ", " +  self.answer + ")"

class date(models.Model):
    date = models.IntegerField()
    month = models.IntegerField()
    year = models.IntegerField()
    Task = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.Task
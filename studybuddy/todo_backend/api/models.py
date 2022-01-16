from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
'''
class Deck(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Flashcards(models.Model):
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    user = models.ForeignKey(User,
                             related_name='flashcards',
                             on_delete=models.CASCADE)
    question = models.CharField(max_length=240)
    answer = models.CharField(max_length=240)

    def __str__(self):
        return "(" + self.question + ", " +  self.answer + ")"
        '''
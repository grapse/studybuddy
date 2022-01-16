from django.db import models

class date(models.Model):
    date = models.IntegerField()
    month = models.IntegerField()
    year = models.IntegerField()
    Task = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.Task
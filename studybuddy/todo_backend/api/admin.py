from django.contrib import admin

from .models import Todo, Flashcards, Deck
from .models import date

class CardAdmin(admin.ModelAdmin):
    list_display = ('question', 'deck')
    list_editable = ['deck']

    search_fields = ['question', 'answer']
    list_filter = ['deck']

admin.site.register(Todo)
admin.site.register(Flashcards,CardAdmin)
admin.site.register(Deck)
admin.site.register(date)
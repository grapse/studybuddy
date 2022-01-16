"""todo_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from api import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'todo', views.TodoView, 'todo')
router.register('flashcards', views.FlashcardsView)
router.register('deck', views.DeckView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('accounts/', include('django.contrib.auth.urls')),
    path('home/', include('User.urls')),
    path('cards/', TemplateView.as_view(template_name="index.html")),
]
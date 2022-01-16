from rest_framework import serializers
from .models import date


class dserializers(serializers.ModelSerializer):

    class Meta:
        model = date
        #fields  = ('day','month','year)
        fields = '__all__'
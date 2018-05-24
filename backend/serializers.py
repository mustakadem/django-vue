from rest_framework import serializers
from .models import Hermandad


class SerializadorHermandad(serializers.ModelSerializer):

    class Meta:
        model = Hermandad
        fields = '__all__'

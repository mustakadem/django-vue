from django import forms
from django.forms import ModelForm

from backend.models import Hermandad


class NuevaHermandad(ModelForm):
  class Meta:
    model = Hermandad
    fields = '__all__'

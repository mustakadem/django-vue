from django.db import models


class Hermandad(models.Model):
    nombre = models.CharField(max_length=255, unique=True)
    email_responsable = models.EmailField(max_length=70, unique=True)
    fecha_creacion = models.DateField()

    def __str__(self):
        return self.nombre

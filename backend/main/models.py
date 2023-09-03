from django.db import models

# Create your models here.

class Transformer(models.Model):
    installed_at = models.DateTimeField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    fault = models.BooleanField(default=False)
    transformer_type = models.CharField(max_length=100)
    manufacture_type = models.CharField(max_length=100)

    def __str__(self):
        transformer_name = f'Transformer: {self.id} '
        return transformer_name

# class SensorData():
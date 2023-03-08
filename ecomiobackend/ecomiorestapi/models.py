from django.db import models


# Create your models here.
class Destination(models.Model):
    code = models.CharField(max_length=3, unique=True, primary_key=True)
    sustainability_score = models.FloatField()

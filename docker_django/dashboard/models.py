from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Dashboard(models.Model):
  title = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)
  owner = models.ForeignKey(User, related_name="cuadernos", on_delete=models.CASCADE, null=True )
  objects = models.Manager() 

class Deck(models.Model):
  title = models.CharField(max_length=100)
  dashboard = models.ForeignKey(Dashboard, on_delete=models.CASCADE)

class Card(models.Model):
  question = models.CharField(max_length=100)
  answer = models.CharField(max_length=100)
  dashboard = models.ForeignKey(Dashboard, on_delete=models.CASCADE)
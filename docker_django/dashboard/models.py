from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Deck(models.Model):
  title = models.CharField(max_length=100)
  owner = models.ForeignKey(User, related_name="decks", on_delete=models.CASCADE, null=True )
  created_at = models.DateTimeField(auto_now_add=True)
  objects = models.Manager() 
 # dashboard = models.ForeignKey(Dashboard, on_delete=models.CASCADE)

class Card(models.Model):
  question = models.CharField(max_length=100)
  answer = models.CharField(max_length=100)
  deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
  score = models.IntegerField(default = 0)
  created_at = models.DateTimeField(auto_now_add=True)
  objects = models.Manager()   
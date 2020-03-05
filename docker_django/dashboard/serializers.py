from rest_framework import serializers
from dashboard.models import Deck, Card

# Deck Serializer
class DeckSerializer(serializers.ModelSerializer):
  class Meta:
    model = Deck
    fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
  class Meta:
    model = Card
    fields = ('question', 'answer', 'deck')
    #fields = '__all__'
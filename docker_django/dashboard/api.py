from dashboard.models import Deck, Card
from rest_framework import viewsets, permissions
from .serializers import DeckSerializer, CardSerializer

# Dashboard Viewset 
class DashboardViewSet(viewsets.ModelViewSet):
  queryset = Deck.objects.all()
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = DeckSerializer 

  def get_queryset(self):
    return self.request.user.decks.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user) 

class DeckViewSet(viewsets.ModelViewSet):
  queryset = Card.objects.all()
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = CardSerializer 
  
  def get_queryset(self):
    return Card.objects.all().filter(deck=self.kwargs['deck']).order_by('score')

  def perform_create(self, serializer):
    serializer.save()
    
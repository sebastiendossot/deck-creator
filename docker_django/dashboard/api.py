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
    print("decks")
    print(self.request.user.decks.all())
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
    deck = self.kwargs['deck']
    print("deck")
    print(Card.objects.all().filter(deck=deck))
    queryset = Card.objects.all().filter(deck=deck)
    return queryset

  def perform_create(self, serializer):
    print("creation")
    print(self)
    serializer.save()
    
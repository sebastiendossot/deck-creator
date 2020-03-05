from rest_framework import routers
from .api import DashboardViewSet, DeckViewSet

router = routers.DefaultRouter()
router.register('api/decks', DashboardViewSet, 'dashboard')
router.register('api/cards', DeckViewSet, 'deck')

urlpatterns = router.urls
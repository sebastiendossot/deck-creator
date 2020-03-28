from rest_framework import routers
from .api import DashboardViewSet, DeckViewSet

router = routers.DefaultRouter()
router.register('api/decks', DashboardViewSet, 'dashboard')
router.register('api/cards/(?P<deck>\d+)', DeckViewSet, 'deck')
router.register('api/cards', DeckViewSet, 'deck')
# router.register('^api/cards/(?P<deck>.+)/$', DeckViewSet, 'deck')

urlpatterns = router.urls
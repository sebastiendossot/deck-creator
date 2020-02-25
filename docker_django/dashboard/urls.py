from rest_framework import routers
from .api import DashboardViewSet

router = routers.DefaultRouter()
router.register('api/dashboard', DashboardViewSet, 'dashboard')

urlpatterns = router.urls
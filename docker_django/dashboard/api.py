# from cuadernos.models import Cuaderno
from rest_framework import viewsets, permissions
from .serializers import CuadernoSerializer

# Cuaderno Viewset 
class DashboardViewSet(viewsets.ModelViewSet):
  # queryset = Cuaderno.objects.all()
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = CuadernoSerializer 

  def get_queryset(self):
    return self.request.user.cuadernos.all()

  def perform_create(self, serializer):
    serializer.save(owner=self.request.user)
    
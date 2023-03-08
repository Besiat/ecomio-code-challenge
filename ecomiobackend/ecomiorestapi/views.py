from rest_framework import viewsets

from ecomiorestapi.models import Destination
from ecomiorestapi.serializers import DestinationSerializer


# Create your views here.
class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

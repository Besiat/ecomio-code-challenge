from rest_framework import serializers
from ecomiorestapi.models import Destination


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ('code', 'sustainability_score')

from django.urls import include, path
from rest_framework import routers

from ecomiorestapi.views import DestinationViewSet

router = routers.DefaultRouter()
router.register(r'destinations', DestinationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

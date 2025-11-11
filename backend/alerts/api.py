"""Alerts viewsets."""
from rest_framework import mixins, permissions, viewsets

from .models import Alert
from .serializers import AlertSerializer


class AlertViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer
    permission_classes = [permissions.IsAuthenticated]

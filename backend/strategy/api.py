"""Strategy API viewsets."""
from rest_framework import mixins, permissions, viewsets

from .models import StrategyRequest
from .serializers import StrategyRequestSerializer


class StrategyRequestViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = StrategyRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return StrategyRequest.objects.select_related('owner').all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

"""Serializers for strategy app."""
from rest_framework import serializers

from .models import StrategyRequest


class StrategyRequestSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(source='owner.username', read_only=True)

    class Meta:
        model = StrategyRequest
        fields = ['id', 'name', 'objective', 'status', 'created_at', 'updated_at', 'owner', 'owner_name']
        read_only_fields = ['id', 'created_at', 'updated_at', 'owner_name']

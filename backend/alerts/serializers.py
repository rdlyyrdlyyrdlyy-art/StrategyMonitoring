"""Serializers for alerts."""
from rest_framework import serializers

from .models import Alert


class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = ['id', 'title', 'level', 'triggered_at', 'payload']
        read_only_fields = ['id', 'triggered_at']

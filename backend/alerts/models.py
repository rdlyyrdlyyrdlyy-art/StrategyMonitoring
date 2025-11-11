"""Alert models."""
from django.db import models


class Alert(models.Model):
    LEVEL_CHOICES = [
        ('low', '低'),
        ('medium', '中'),
        ('high', '高'),
    ]

    title = models.CharField(max_length=255)
    level = models.CharField(max_length=16, choices=LEVEL_CHOICES)
    triggered_at = models.DateTimeField(auto_now_add=True)
    payload = models.JSONField(default=dict, blank=True)

    class Meta:
        ordering = ['-triggered_at']
        verbose_name = '风险预警'
        verbose_name_plural = '风险预警'

    def __str__(self) -> str:
        return f"{self.title} ({self.get_level_display()})"

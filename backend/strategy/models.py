"""Strategy domain models."""
from django.conf import settings
from django.db import models


class StrategyRequest(models.Model):
    STATUS_CHOICES = [
        ('draft', '草稿'),
        ('submitted', '已提交'),
        ('approved', '已审批'),
        ('rejected', '已驳回'),
    ]

    name = models.CharField(max_length=255)
    objective = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default='draft')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']
        verbose_name = '策略需求'
        verbose_name_plural = '策略需求'

    def __str__(self) -> str:
        return self.name

"""Accounts models."""
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """Custom user model with enterprise bindings."""

    external_id = models.CharField(
        max_length=64,
        blank=True,
        help_text='企业微信用户标识，与 LDAP 用户名保持一致'
    )

    class Meta:
        verbose_name = '用户'
        verbose_name_plural = '用户'

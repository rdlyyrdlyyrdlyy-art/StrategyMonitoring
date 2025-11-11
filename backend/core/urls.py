"""Project URL Configuration."""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from accounts.api import CurrentUserViewSet
from strategy.api import StrategyRequestViewSet
from alerts.api import AlertViewSet

router = routers.DefaultRouter()
router.register('me', CurrentUserViewSet, basename='current-user')
router.register('strategy/requests', StrategyRequestViewSet, basename='strategy-request')
router.register('alerts', AlertViewSet, basename='alert')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

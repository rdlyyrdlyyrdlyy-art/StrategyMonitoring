from django.contrib import admin

from .models import StrategyRequest


@admin.register(StrategyRequest)
class StrategyRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'status', 'updated_at')
    list_filter = ('status',)
    search_fields = ('name', 'owner__username')

from django.contrib import admin

from .models import Alert


@admin.register(Alert)
class AlertAdmin(admin.ModelAdmin):
    list_display = ('title', 'level', 'triggered_at')
    list_filter = ('level',)
    search_fields = ('title',)

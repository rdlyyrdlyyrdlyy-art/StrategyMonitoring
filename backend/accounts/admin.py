from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'external_id', 'is_staff', 'is_active')
    search_fields = ('username', 'email', 'external_id')
    fieldsets = UserAdmin.fieldsets + (('企业微信', {'fields': ('external_id',)}),)

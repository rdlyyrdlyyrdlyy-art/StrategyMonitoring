"""Accounts API endpoints."""
from rest_framework import permissions, viewsets
from rest_framework.response import Response


class CurrentUserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        user = request.user
        return Response(
            {
                'username': user.username,
                'email': user.email,
                'roles': [group.name for group in user.groups.all()],
            }
        )

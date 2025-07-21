from rest_framework import serializers

from .models import EmailSubscription


class EmailSubsriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubscription
        fields = "__all__"

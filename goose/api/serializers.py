
from rest_framework import serializers  # ✅ This line is required
from goose.models import GooseCoinInfo

# goose/api/serializers.py
class GooseCoinInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GooseCoinInfo
        fields = '__all__'

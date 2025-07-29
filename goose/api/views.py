from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import generics, status
from goose.models import GooseCoinInfo
from .serializers import GooseCoinInfoSerializer

class GooseCoinInfoView(generics.GenericAPIView):
    serializer_class = GooseCoinInfoSerializer
    renderer_classes = [JSONRenderer]  # ✅ Only respond with JSON

    def get(self, request, *args, **kwargs):
        print("✅ GooseCoinInfoView.get() called")
        obj = GooseCoinInfo.objects.first()

        if obj:
            serializer = self.get_serializer(obj)
            return Response(serializer.data)
        else:
            return Response(
                {"detail": "No GooseCoinInfo found."},
                status=status.HTTP_404_NOT_FOUND
            )

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import EmailSubsriptionSerializer


# Create your views here.
class EmailSubscriptionView(APIView):
    def post(self, request):
        serializer = EmailSubsriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import EmailSubsriptionSerializer


# Create your views here.
@method_decorator(csrf_exempt, name="dispatch")
class EmailSubscriptionView(APIView):
    def post(self, request):
        serializer = EmailSubsriptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


def health_check(request):
    return JsonResponse({"status": "ok"})

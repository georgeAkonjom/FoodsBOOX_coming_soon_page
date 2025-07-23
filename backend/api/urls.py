from django.urls import path

from .views import EmailSubscriptionView, health_check

urlpatterns = [
    path("subscribe/", EmailSubscriptionView.as_view(), name="email-subscribe"),
    path("health/", health_check),
]

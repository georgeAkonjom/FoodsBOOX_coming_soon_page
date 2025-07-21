from django.urls import path

from .views import EmailSubscriptionView

urlpatterns = [
    path("subscribe/", EmailSubscriptionView.as_view(), name="email-subscribe"),
]

from django.db import models


# Create your models here.
class EmailSubscription(models.Model):
    email_addr = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

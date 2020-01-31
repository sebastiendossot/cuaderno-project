from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cuaderno(models.Model):
  title = models.CharField(max_length=100)
  abstract = models.CharField(max_length=500, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  owner = models.ForeignKey(User, related_name="cuadernos", on_delete=models.CASCADE, null=True )
  objects = models.Manager() 
from rest_framework import serializers
from cuadernos.models import Cuaderno

# Lead Serializer
class CuadernoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cuaderno
    fields = '__all__'
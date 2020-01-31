from rest_framework import routers
from .api import CuadernoViewSet

router = routers.DefaultRouter()
router.register('api/cuadernos', CuadernoViewSet, 'cuadernos')

urlpatterns = router.urls
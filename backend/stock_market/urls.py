from django.urls import include, path
from .views import get_stock_data, get_stock_data_sql, StockViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'', StockViewSet)

urlpatterns = [
    path('jsonModel/', get_stock_data, name="data" ),
    path('sqlModel/', include(router.urls))
]
from django.urls import include, path
from .views import get_stock_data, get_stock_data_sql

urlpatterns = [
    path('jsonModel/', get_stock_data, name="data" ),
    path('sqlModel/', get_stock_data_sql, name="data_sql")
]
from django.shortcuts import render
from django.http import JsonResponse
import json
from rest_framework import viewsets, response, status
from .models import StockMarketData
from .serializers import StockDataSerializer

def get_stock_data(request):
    with open("static/stock_market_data.json") as f:
        data = json.load(f )
    return JsonResponse( data, safe = False )


def get_stock_data_sql(request):
    with open("static/stock_market_data.json") as f:
        data = json.load(f )
    return JsonResponse( data, safe = False )


class StockViewSet(viewsets.ModelViewSet):
    queryset = StockMarketData.objects.all().order_by('date')
    serializer_class = StockDataSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data,list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
from django.shortcuts import render
from django.http import JsonResponse
import json

def get_stock_data(request):
    with open("static/stock_market_data.json") as f:
        data = json.load(f )
    return JsonResponse( data, safe = False )


def get_stock_data_sql(request):
    with open("static/stock_market_data.json") as f:
        data = json.load(f )
    return JsonResponse( data, safe = False )
from rest_framework import serializers
from .models import StockMarketData

class StockDataSerializer(serializers.ModelSerializer):
    open = serializers.FloatField(source='open_a')

    class Meta:
        model = StockMarketData
        fields = [ 'id', 'date', 'trade_code', 'high', 'low', 'open', 'close', 'volume']
    
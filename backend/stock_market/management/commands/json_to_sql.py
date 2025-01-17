from django.core.management.base import BaseCommand
from stock_market.models import StockMarketData  # Import any models you need
from stock_market.serializers import StockDataSerializer
import json

class Command(BaseCommand):
    help = 'This is a custom command example that prints a message'

    def add_arguments(self, parser):
        # Optional: Add arguments for the command (e.g., --count)
        parser.add_argument('--path', type=str, help='Path to the json file.')

    def handle(self, *args, **kwargs):
        path = kwargs.get('path') or "static/stock_market_data.json"
        self.stdout.write(self.style.SUCCESS(f'Using path: {path}'))
        with open(path, 'r') as f:
            data = f.read()
            data = json.loads(data)
        
        for i in data:
            i['volume'] = float(i['volume'].replace(',', ''));
            i['open'] = float(i['open'].replace(',', ''))
            i['close'] = float(i['close'].replace(',', ''))
            i['low'] = float(i['low'].replace(',', ''))
            i['high'] = float(i['high'].replace(',', ''))
            # self.stdout.write(self.style.ERROR(i))
        
        serialized_data = StockDataSerializer(data=data, many=True)
        if serialized_data.is_valid():
            serialized_data.save()
            self.stdout.write(self.style.SUCCESS("Complete"));
        else:
            self.stdout.write(self.style.ERROR(serialized_data.errors));
            self.stdout.write(self.style.ERROR("Data is not in valid format"));

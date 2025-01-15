from django.db import models

class StockMarketData(models.Model):
    date       = models.DateField()
    trade_code = models.CharField(max_length=50)
    high       = models.FloatField()
    low        = models.FloatField()
    open_a     = models.FloatField()
    close      = models.FloatField()
    volume     = models.IntegerField()
    
    class Meta:
        verbose_name = "StockMarketData"
        verbose_name_plural = "StockMarketDatas"

    def __str__(self):
        return self.trade_code

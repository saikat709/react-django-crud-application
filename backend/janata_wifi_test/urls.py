from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static 
from django.conf import settings 

from janata_wifi_test.views import home

admin.site.site_title = "Crud Application with React and Django"
admin.site.site_header = "Crud Application - React.js + Django"
admin.site.index_title = "Crud Admin Home"

urlpatterns = [
    path('', home, name="home"),
    path('data/', include('stock_market.urls') ),
    path('admin/', admin.site.urls),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

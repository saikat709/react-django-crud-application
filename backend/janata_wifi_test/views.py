from django.shortcuts import render

def home(request, *args, **kwrgs):
    return render(request=request, template_name='index.html')
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def Home_Page(request):
    return render(request, 'index.html')
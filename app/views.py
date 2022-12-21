from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

def Home_Page(request):
    return render(request, 'index.html', {'category':'Home'})


def Category(request, category_name):
    return render(request, 'index.html',{'category':category_name})


def Search(request, search_data):
    return HttpResponse(search_data)

def Search_With_Filters(request, search_data, filters):
    pass
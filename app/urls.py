from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.Home_Page, name='Home'),
    path('category/<str:category_name>',views.Category, name='category'),
    path('search/<str:search_data>', views.Search, name='search'),
]

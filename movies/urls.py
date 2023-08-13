from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('<slug>/', movie),
    path('apis/movies_api/', movies),
    path('apis/movie/<slug>/', movie_api),
    path('apis/categories_api/', categories),
    path('<slug>/stream/', streaming),
    path('movie/search/', movie_search)
]

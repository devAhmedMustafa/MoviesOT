from django.shortcuts import render
from .models import *
from .serializers import *
from django.http import JsonResponse
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.db.models import Q


def home(request):

    context = {
        'categories': Category.objects.all(),
        'movies': Movie.objects.all(),
    }

    return render(request, 'home.html', )


def movie(request, slug):

    movie = Movie.objects.get(slug=slug)

    return render(request, 'movie.html', {'vid':movie})

def streaming(request, slug):

    movie = Movie.objects.get(slug=slug)

    return render(request, 'streaming.html', {'vid': movie})

@api_view(['GET'])
def categories(request):
    if request.method == 'GET':
        model = Category.objects.all()
        serializers = CategorySerializer(model, many=True)

        return Response(serializers.data)

@api_view(['GET'])
def movies(request):

    if request.method == 'GET':

        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)

        return Response(serializer.data)

@api_view(['GET'])
def movie_api(request, slug):

    if request.method == 'GET':

        movie = Movie.objects.get(slug = slug)
        serializer = MovieSerializer(movie)

        return Response(serializer.data)

@api_view(['GET'])
def movie_search(request):

    if request.method == 'GET':
        query = request.GET['query']
        print(query)
        movies = Movie.objects.filter( Q(title__icontains = query) | Q(category__name__icontains = query) )
        serializer = MovieSerializer(movies, many=True)

        return Response(serializer.data)
    
        
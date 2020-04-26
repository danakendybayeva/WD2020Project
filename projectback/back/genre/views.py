from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.http import JsonResponse
from genre.models import Genre


# Create your views here.
JSON_ERROR = {'error' :  'Genre does not exist'}
def genre_exist(genre_id) :
    try:
        genre = Genre.objects.get(id = genre_id)
    except Genre.DoesNotExist as e:
        return False
    return True


def get_genre(request,genre_id) :
    if(genre_exist(genre_id) == False) :
        return JsonResponse(JSON_ERROR)
    genre = Genre.objects.get(id = genre_id)

    return JsonResponse(genre.to_json())
def get_all_genres(request):
    genres = Genre.objects.all()
    genres_json = [g.to_json() for g in genres]
    return JsonResponse(genres_json, safe =False)


def get_all_books(request,genre_id) :
    if (genre_exist(genre_id) == False):
        return JsonResponse(JSON_ERROR)
    genre = Genre.objects.get(id = genre_id)
    books = genre.book_set.all()
    books_json = [b.to_json() for b in books]
    return JsonResponse(books_json,safe = False)
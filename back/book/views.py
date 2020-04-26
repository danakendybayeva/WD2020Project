from django.shortcuts import render
# from django.http.request import HttpRequest
# from django.http.response import HttpResponse
from django.http import JsonResponse
from genre.models import Genre
from book.models import Book
from django.views.decorators.csrf import csrf_exempt
from django.views import View
import json
from comment.models import Comment
from book.serializers import *
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
JSON_ERROR = {'error' :  'Book does not exist'}



def book_exist (book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist as e:
        return False
    return True


def get_all_books(request):
    #GRUD OPERATIONS
    if request.method == 'GET' :
        books = Book.objects.all()
        books_json = [b.to_json() for b in books]
        return JsonResponse(books_json,safe = False)
    elif request.method == 'POST' :
        data = json.loads(request.body)
        book = Book()
        book.name = data.get('name', 'defoult_name' + str(book.id))
        book.genre_id = data.get('genre_id', 1)
        book.save()
    return JsonResponse(book.to_json())

class BookList(APIView) :
    def get(self, request) :
        books = Book.objects.all()
        books_json = [b.to_json() for b in books]
        return Response(books_json)
    def post(self, request):
        r_data = json.loads(request.body)
        book = Book()
        book.name = r_data.get('name','None')
        book.price = r_data.get('price', 0)
        book.genre_id = r_data.get('genre_id', )
        book.save()
        return Response(book.to_json())

class ForGetBookView(View) :
    def get(self,request, book_id):
        if (book_exist(book_id) == False):
            return JsonResponse(JSON_ERROR)
        book = Book.objects.get(id=book_id)
        return JsonResponse(book.to_json())

    def put(self,request,book_id):
        if (book_exist(book_id) == False):
            return JsonResponse(JSON_ERROR)
        book = Book.objects.get(id=book_id)
        r_data = json.loads(request.body)
        serializer = BookSerializer2(book, data=r_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    def delete(self,request,book_id):
        if (book_exist(book_id) == False):
            return JsonResponse(JSON_ERROR)
        book = Book.objects.get(id=book_id)
        book.delete()
        return JsonResponse({"delete": True})



@csrf_exempt
def get_book (request,book_id) :
    if(book_exist(book_id) == False) :
        return JsonResponse(JSON_ERROR)
    book = Book.objects.get(id = book_id)
    if request.method == 'PUT' :
        data = json.loads(request.body)
        book.name = data.get('name', book.name)
        book.genre_id = data.get('genre_id', book.genre_id)
        book.price = data.get('price', book.price)
        book.rating = data.get('rating', book.rating)
        book.save()
    elif request.method == 'DELETE':
        book.delete()
        return JsonResponse({"delete" : True})

    return JsonResponse(book.to_json())


class ForCommentsView(View) :
    def get(self, request, book_id):
        if (book_exist(book_id) == False):
            return JsonResponse(JSON_ERROR)
        book = Book.objects.get(id=book_id)
        commnets = book.comment_set.all()
        commnets_json = [c.to_json() for c in commnets]
        return JsonResponse(commnets_json, safe=False)





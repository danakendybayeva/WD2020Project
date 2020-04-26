from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.http import JsonResponse
from genre.models import Genre
from book.models import Book

# Create your views here.
JSON_ERROR = {'error' :  'Book does not exist'}

def book_exist (book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist as e:
        return False
    return True
def get_all_books(request):
    books = Book.objects.all()
    books_json = [b.to_json() for b in books]
    return JsonResponse(books_json,safe = False)
def get_book (request,book_id) :
    if(book_exist(book_id) == False) :
        return JsonResponse(JSON_ERROR)
    return JsonResponse(Book.objects.get(id = book_id).to_json())


from django.urls import path
from book.views import *

urlpatterns = [
    path('<int:book_id>/',get_book),
    path('all/',get_all_books),

]


from django.urls import path
from genre.views import *
urlpatterns = [
    path('<int:genre_id>/', get_genre),
    path('all/', get_all_genres),
    path('<int:genre_id>/books/', get_all_books),
]
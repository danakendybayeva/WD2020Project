from django.urls import path
from book.views import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
urlpatterns = [
    path('<int:book_id>/',csrf_exempt(ForGetBookView.as_view())),
    path('all/',BookList.as_view()),
    # path('<int:book_id>/comments/',csrf_exempt(ForCommentsView.as_view())),
    path('<int:book_id>/comments/', csrf_exempt(ForCommentsView.as_view())),
    path('search/<str:pattern>/', searchBook),
]
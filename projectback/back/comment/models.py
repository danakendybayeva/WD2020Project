from django.db import models
from user.models import User
from book.models import Book
# Create your models here.
class Comment(models.Model):
    text = models.TextField(default= '')
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'text' : self.text,
            'book' : self.book_id,
            'user' : user_id
        }
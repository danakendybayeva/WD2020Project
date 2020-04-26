from django.db import models
from genre.models import Genre
# Create your models here.

class Book (models.Model):
    name = models.CharField(max_length=30)
    price = models.IntegerField(default=0)
    genre =  models.ForeignKey(Genre,on_delete= models.CASCADE)
    image = models.TextField(default='')
    author = models.CharField(max_length=30, default='')
    description = models.TextField(default='')
    rating = models.FloatField(default=0)
    year = models.IntegerField(default=0)

    def to_json(self):
        return {
            'name' : self.name,
            'price' : self.price,
            'genre' : self.genre_id,
        }
from django.db import models
from genre.models import Genre
# Create your models here.

class Book (models.Model):
    image = models.CharField(max_length=300)
    name = models.CharField(max_length=30)
    author = models.CharField(max_length=30, default='')
    description = models.TextField(default='')
    price = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    year = models.IntegerField(default=0)
    genre = models.ForeignKey(Genre,on_delete= models.CASCADE, default=0)

    def to_json(self):
        return {
            'id' : self.id,
            'image' : self.image,
            'name' : self.name,
            'author' : self.author,
            'description' : self.description,
            'price' : self.price,
            'rating' : self.rating,
            'year' : self.year,
            'genre' : self.genre_id,
        }
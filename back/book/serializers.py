from rest_framework import serializers
from book.models import *
class BookSerializer(serializers.Serializer) :
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    price = serializers.IntegerField()
    genre_id = serializers.IntegerField()

    def create(self, validated_data):
        book = Book()
        book.name = validated_data['name']
        book.price = validated_data['price']
        book.genre_id = validated_data['genre_id']
        book.save()
        return book


    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.genre_id = validated_data.get('genre_id', instance.genre_id)
        return instance

class BookSerializer2(serializers.ModelSerializer):
    class Meta :
        model = Book
        fields = ('id', 'name', 'price','genre_id')

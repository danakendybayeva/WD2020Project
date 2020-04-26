from django.db import models

# Create your models here.
# fo
class Genre(models.Model) :
    name = models.CharField(max_length=30)
    def to_json(self):
        return {
            'name' : self.name,
            'id' : self.id
        }
from django.db import models

class Note(models.Model):
    name = models.CharField(max_length=20)
    content = models.CharField(max_length=250)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

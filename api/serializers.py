from rest_framework import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    created = serializers.SerializerMethodField()
    modified = serializers.SerializerMethodField()
    class Meta:
        model = Note
        fields = ['id', 'name', 'content', 'created', 'modified']

    def get_created(self, obj):
        return obj.created.strftime("%d-%m-%Y, %H:%M")
    
    def get_modified(self, obj):
        return obj.modified.strftime("%d-%m-%Y, %H:%M")

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('notes/', views.NoteList.as_view()),
    path('notes/<str:pk>/', views.NoteDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
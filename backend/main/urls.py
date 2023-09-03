from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # path("add/", ),
    path("transformers/", views.TransformerListView.as_view(), name='transformer-list-create'),
    path("transformer/<int:pk>/", views.TransformerRetrieveUpdateDestroyView.as_view(), name='transformer-detail'),
]

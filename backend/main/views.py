from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, filters, status
# Create your views here.
from .models import Transformer
from .serializers import TransformerSerializer

class TransformerListView(generics.ListCreateAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer
    
class TransformerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, filters, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
from .models import Transformer
from .serializers import TransformerSerializer
from .signals import new_item_created

class TransformerListView(generics.ListCreateAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        new_item_created.send(sender=instance.__class__, instance=instance)
    
class TransformerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer

@api_view(['GET'])
def model_predict(request):

    predicted_result = ""
    return Response(predicted_result)
        
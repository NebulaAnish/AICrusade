from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, filters, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
from .models import Transformer
from .serializers import TransformerSerializer
from .signals import new_item_created

# class TransformerListView(generics.ListCreateAPIView):
#     queryset = Transformer.objects.all()
#     serializer_class = TransformerSerializer


    
class TransformerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer


from rest_framework import generics
from django.db.models import Q
from .models import Transformer
from .serializers import TransformerSerializer

class TransformerListView(generics.ListAPIView):
    serializer_class = TransformerSerializer
    def perform_create(self, serializer):
        instance = serializer.save()
        new_item_created.send(sender=instance.__class__, instance=instance)
    def get_queryset(self):
        # Get latitude and longitude query parameters from the request
        latitude = self.request.query_params.get('latitude')
        longitude = self.request.query_params.get('longitude')

        if latitude is not None and longitude is not None:
            try:
                latitude = float(latitude)
                longitude = float(longitude)
            except ValueError:
                return Transformer.objects.none()

            # Define latitude and longitude difference (approximately 2 units)
            latitude_difference = 2
            longitude_difference = 2

            # Calculate latitude and longitude ranges for the query
            min_latitude = latitude - latitude_difference
            max_latitude = latitude + latitude_difference
            min_longitude = longitude - longitude_difference
            max_longitude = longitude + longitude_difference

            # Query Transformer instances within the specified range
            queryset = Transformer.objects.filter(
                Q(latitude__gte=min_latitude) &
                Q(latitude__lte=max_latitude) &
                Q(longitude__gte=min_longitude) &
                Q(longitude__lte=max_longitude)
            )
            return queryset
        else:
            return Transformer.objects.all()

@api_view(['GET'])
def model_predict(request):

    predicted_result = ""
    return Response(predicted_result)
        
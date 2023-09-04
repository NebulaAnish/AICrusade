from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics, filters, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Transformer
from .serializers import TransformerSerializer
from .signals import new_item_created
from rest_framework import generics
from django.db.models import Q
from .models import Transformer
from .serializers import TransformerSerializer
import pandas as pd
from django.conf import settings
from . import signals

class TransformerRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Transformer.objects.all()
    serializer_class = TransformerSerializer


class TransformerListView(generics.ListCreateAPIView):
    serializer_class = TransformerSerializer
    def perform_create(self, serializer):
        instance = serializer.save()
        new_item_created.send(sender=instance.__class__, instance=instance)
    def get_queryset(self):
        # Get latitude and longitude query parameters from the request
        sensor_dataset = pd.read_csv(settings.SENSOR_FILE)
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
            #random

            # Query Transformer instances within the specified range
            queryset = Transformer.objects.filter(
                Q(latitude__gte=min_latitude) &
                Q(latitude__lte=max_latitude) &
                Q(longitude__gte=min_longitude) &
                Q(longitude__lte=max_longitude)
            )
            return_queryset = queryset
        else:
            return_queryset = Transformer.objects.all()
        for transformer in return_queryset:
            sensor_data = sensor_dataset.sample(1)
            predicted_value = signals.model.predict(sensor_data)
            if predicted_value ==1:
                transformer.fault = True
                transformer.save()
        
        for transformer in return_queryset:
            if transformer.fault == False:
                transformer.fault = 0
            if transformer.fault == True:
                transformer.fault = 1
        return return_queryset


@api_view(['GET'])
def model_predict(request):

    predicted_result = ""
    return Response(predicted_result)
        
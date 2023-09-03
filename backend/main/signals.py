from django.db.models.signals import Signal
from django.dispatch import receiver
import numpy as np
import joblib
import os
# model_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'model', 'random_forest.joblib')

new_item_created = Signal()
# random_forest = joblib.load(model_file_path)

@receiver(new_item_created)
def prediction(sender, instance, **kwargs):
    prediction = 0


    if prediction:
        instance.fault = True
        instance.save()

from django.db.models.signals import Signal
from django.dispatch import receiver
import numpy as np
import joblib
import os
from django.conf import settings


new_item_created = Signal()
MODEL_FILE = os.path.join(settings.MODELS, "random_forest.joblib")
model = joblib.load(MODEL_FILE)

@receiver(new_item_created)
def prediction(sender, instance, **kwargs):
    prediction = 0
    

    if prediction:
        instance.fault = True
        instance.save()

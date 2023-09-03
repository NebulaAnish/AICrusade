from django.db.models.signals import Signal
from django.dispatch import receiver
import numpy as np
import pandas as pd
import joblib
import os
from django.conf import settings


new_item_created = Signal()
MODEL_FILE = os.path.join(settings.MODELS, "random_forest.joblib")
# SENSOR_FILE = os.path.join(settings.MODELS, "sensor_data.sensor_data.csv")
model = joblib.load(MODEL_FILE)


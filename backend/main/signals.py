from django.db.models.signals import Signal
from django.dispatch import receiver

new_item_created = Signal()

@receiver(new_item_created)
def prediction(sender, instance, **kwargs):
    prediction = 0


    if prediction:
        instance.fault = True
        instance.save()

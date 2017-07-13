"""This module contains comment model class and basic functions"""

from django.db import models
from trip.models import Trip
from django.db.models import ProtectedError
from django.core.exceptions import ObjectDoesNotExist, FieldError


class Checkpoint(models.Model):
    """
    Checkpoint
    :argument id: int - autogenerated primary key
    :argument longitude: float - 1-st position coordinate
    :argument latitude: float - 2-nd position coordinate
    :argument title: char - checkpoint's title
    :argument description: text - description of checkpoint
    :argument position_number: int - ordinal number of checkpoint
    :argument source_url: url - url of the checkpoint's source
    :argument trip: int - foreign key to Trip model
    """

    longitude = models.FloatField()
    latitude = models.FloatField()
    title = models.CharField(max_length=20)
    description = models.TextField()
    position_number = models.IntegerField()
    source_url = models.URLField()
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE)
    created = models.DateTimeField(null=True)
    last_modified = models.DateTimeField(null=True)

    def to_dict(self):
        """
        Convert model object to dictionary.
        Return:
            dict:
                {
                    "longitude": longitude,
                    "latitude": latitude,
                    "title": title,
                    "description": description,
                    "source_url": source_url,
                    "position_number": position_number,
                    "trip_id": trip
                }
        """

    @staticmethod
    def create(longitude, latitude, title, description, source_url, position_number, trip):
        """
        Create checkpoint with given trip_id, longitude,latitude,title,description,source_url,
        position_number,trip.
        Args:
            id (int): autogenerated primary key.
            longitude (float):  1-st position coordinate.
            latitude (float): 2-nd position coordinate.
            title (char): checkpoint's title.
            description (text): description of checkpoint.
            position_number (int):  ordinal number of checkpoint.
            source_url (url):  url of the checkpoint's source.
            trip (int):  ToDo foreign key to Trip model.
        Returns:
            Object<Checkpoint>: Object of Checkpoint.
        """

        try:
            new_object = Checkpoint()
            new_object.longitude = longitude
            new_object.latitude = latitude
            new_object.title = title
            new_object.description = description
            new_object.source_url = source_url
            new_object.position_number = position_number
            new_object.trip = trip
            new_object.save()
        except FieldError:
            return None
        return new_object

    @staticmethod
    def get_by_id(checkpoint_id):
        """
        Returns checkpoint by given id.
        Args:
            checkpoint_id (int): id - primary key
        Returns:
            Object<Checkpoint>: Object of Checkpoint.
        """

        try:
            checkpoint = Checkpoint.objects.get(id=checkpoint_id)
            return checkpoint
        except ObjectDoesNotExist:
            return None

    def update(self,
               longitude=None,
               latitude=None,
               title=None,
               description=None,
               source_url=None,
               position_number=None,
               trip=None):
        """
        Updates checkpoint with given parameters.
        Args:
            id (int): autogenerated primary key.
            longitude (float):  1-st position coordinate.
            latitude (float): 2-nd position coordinate.
            title (char): checkpoint's title.
            description (text): description of checkpoint.
            position_number (int):  ordinal number of checkpoint.
            source_url (url):  url of the checkpoint's source.
            trip (int):  ToDo foreign key to Trip model.
        Returns:
            Object<Checkpoint>: Object of Checkpoint if updating was successful and None if wasn't
        """

        if longitude:
            self.longitude = longitude
        if latitude:
            self.latitude = latitude
        if title:
            self.title = title
        if description:
            self.description = description
        if position_number:
            self.position_number = position_number
        if source_url:
            self.source_url = source_url
        if longitude:
            self.trip = trip
        try:
            self.save()
            return self
        except ProtectedError:
            return None

    @staticmethod
    def delete(checkpoint_id):
        """
        Deletes checkpoint.
        Args:
            self - checkpoint object
        Returns:
            True if deleting was successful
            False if deleting wasn't complete
        """
        checkpoint = Checkpoint.objects.get(id = checkpoint_id)
        try:
            super(Checkpoint,checkpoint).delete()
            return True
        except ProtectedError:
            return False

"""This module contains Trip model class and basic functions."""
from django.db import models
from django.core.exceptions import ObjectDoesNotExist

from registration.models import CustomUser


class Trip(models.Model):
    """
    Trip
    :argument id: int - auto generated primary key,
    :argument user_id: int - foreign key to User model,
    :argument title: str - title,
    :argument description: str - description,
    :argument create_at: datetime - date,
    :argument status: int - 0-in progress, 1-announced, 2-finished.
    """
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    status = models.IntegerField(default=0)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True, editable=True)

    def to_dict(self):
        """
        Convert model object to dictionary.
        Return:
            dict:
                {
                'id': id,
                'user': user,
                'title': title,
                'create_at': date,
                'description': description,
                'status': status
                }
        """
        return {
            "id": self.id,
            "user": self.user.id,
            "title": self.title,
            "create_at": self.create_at,
            "description": self.description,
            "status": self.status}

    def __repr__(self):
        return "id:{} user:{} title:{} create_at:{}" \
               " description:{} status:{}".format(self.id,
                                                  self.user,
                                                  self.title,
                                                  self.create_at,
                                                  self.description,
                                                  self.status)

    @staticmethod
    def get_by_id(trip_id):
        """
        Get Trip with given trip id.
        Args:
            trip_id (int): trip id.
        Returns:
            trip Object.
        """
        try:
            trip = Trip.objects.get(id=trip_id)
            return trip
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def create(data):
        """
        Creates Trip
        Args:
            data (dict):
                user (int): fk to user.
                title (str): title of trip.
                description (str): description.
                status (int): trip status.
        Returns:
            trip Object.
        """
        trip = Trip()
        trip.user = data['user']
        trip.title = data['title']
        trip.description = data['description']
        trip.status = data['status']
        trip.save()
        return trip

    def edit(self, data):
        """
        Updates Trip with new title, description and status.
        Args:
            data (dict):
                title (str): title of trip.
                description (str): description.
                status (int): trip status.
        Returns:
            trip Object.
        """
        self.title = data['title']
        self.description = data['description']
        self.status = data['status']
        self.save()
        return True

    @staticmethod
    def delete_by_id(trip_id):
        """
        Deletes Trip by id
        Args:
            trip_id (int): id of trip.
        Returns:
            True.
        """
        try:
            trip = Trip.objects.get(id=trip_id)
            trip.delete()
            return True
        except ObjectDoesNotExist:
            return None

    @staticmethod
    def get_trips(user_id, page=0, step=6):
        """
        Returns last 6 trips, also by the user.
        Args:
            user_id (int): id of user,
            page (int): number of trip-list,
            step (int): maximum quantity of trips on one page of trip-list,
        Returns:
            reversed trips.
        """
        start = step*page
        end = start + step
        if not user_id:
            trips = (Trip.objects.all().order_by('-create_at')[start:end])
            return trips
        trips = (Trip.objects.filter(user=user_id).order_by('-create_at')[start:end])
        return trips

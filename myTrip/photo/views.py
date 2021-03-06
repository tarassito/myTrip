"""Module generate view for photo requests."""

import json

from django.views.generic.base import View
from django.http import JsonResponse, HttpResponse

from mytrip.uploadFile import upload, imageValidator
from checkpoint.models import Checkpoint
from registration.models import CustomUser
from trip.models import Trip
from .models import Photo


class PhotoView(View):
    """Class that handle HTTP requests."""

    def get(self, request, trip_id, checkpoint_id=None, photo_id=None):
        """GET request handler. Can return photo/photos ordered by given arguments."""
        if not photo_id:
            photos = Photo.filter(trip_id, checkpoint_id)
            if not photos:
                return HttpResponse(status=204)
            data = [photo.to_dict() for photo in photos]
            return JsonResponse(data, status=200, safe=False)
        photo = Photo.get_by_id(photo_id)
        if not photo:
            return HttpResponse(status=204)
        data = photo.to_dict()
        return JsonResponse(data, status=200)

    def post(self, request, trip_id, checkpoint_id=None, photo_id=None):
        """POST request handler. Creating a new photo object and return status 201("created")."""
        user = CustomUser.get_by_id(request.user.id)
        trip = Trip.get_by_id(trip_id)
        if not trip:
            return HttpResponse(status=404)
        checkpoint = Checkpoint.get_by_id(checkpoint_id)

        if not imageValidator(request.FILES.get('name')):
            return HttpResponse(status=400)

        imageToUpload = request.FILES.get('name')
        url = upload(imageToUpload.name, imageToUpload)
        photo = Photo.create(trip=trip, checkpoint=checkpoint,
                             user=user, src=url)
        data = photo.to_dict()
        return JsonResponse(data, status=201)

    def put(self, request, trip_id=None, checkpoint_id=None, photo_id=None):
        """PUT request handler.
        If photo object found by id and user is owner, try to update photo."""
        update_data = json.loads(request.body.decode('utf-8'))
        photo = Photo.get_by_id(photo_id)
        if not photo:
            return HttpResponse(status=400)
        if photo.user.id == request.user.id:
            photo.update(**update_data)
            data = photo.to_dict()
            return JsonResponse(data, status=200)
        return HttpResponse(status=403)

    def delete(self, request, trip_id=None, checkpoint_id=None, photo_id=None):
        """DELETE request handler.
        If photo were found by id and user is owner, try to delete photo."""
        photo = Photo.get_by_id(photo_id)
        if not photo:
            return HttpResponse(status=400)
        if photo.user.id == request.user.id:
            photo.delete()
            return HttpResponse(status=200)
        return HttpResponse(status=403)

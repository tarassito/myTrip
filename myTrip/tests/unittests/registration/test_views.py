"""Contains view tests for registration app."""

from json import dumps

from django.test import TestCase
from django.urls import reverse

from registration.models import CustomUser

FACEBOOK_AUTH_URL = "http://triptrck.com/api/v1/auth/facebook_auth/"

class RegistrationViewsTests(TestCase):
    """
    Test 'login', 'logout' and 'register' views.
    """

    def setUp(self):
        """
        Create CustomUser record in database.
        """

        self.user = CustomUser.objects.create(id=5,
                                              email='test@gmail.com')
        self.user.set_password('password')
        self.user.save()

    def test_login_success(self):
        """
        Test 'login' view.
        """

        request = self.client.post(reverse('login_view'),
                                   dumps({"email": "test@gmail.com", "password": "password"}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 200)

    def test_login_wrong_email(self):
        """
        Test 'login' view with wrong email.
        """

        request = self.client.post(reverse('login_view'),
                                   dumps({"email": "krest@gmail.com", "password": "password"}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 403)

    def test_login_wrong_password(self):
        """
        Test 'login' view with wrong password.
        """

        request = self.client.post(reverse('login_view'),
                                   dumps({"email": "test@gmail.com", "password": "pwd"}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 403)

    def test_login_wrong_email_and_password(self):
        """
        Test 'login' view with wrong email & password.
        """

        request = self.client.post(reverse('login_view'),
                                   dumps({"email": "krest@gmail.com", "password": "pwd"}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 403)

    def test_logout_success(self):
        """
        Test 'logout' view.
        """

        self.client.login(username='test@gmail.com', password='password')

        request = self.client.get(reverse('logout_view'))
        self.assertEqual(request.status_code, 200)

    def test_logout_user_not_authenticated(self):
        """
        Test 'logout' view while not authenticated.
        """

        request = self.client.get(reverse('logout_view'))
        self.assertEqual(request.status_code, 400)

    def test_register_success(self):
        """
        Test 'register' view.
        """

        request = self.client.post(reverse('register_view'),
                                   dumps({"email": "reg_test@gmail.com", "password": "pwd",
                                          "created": None, "last_modified": None}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 201)

    def test_register_email_already_registered(self):
        """
        Test 'register' view with email that already exists in database.
        """

        request = self.client.post(reverse('register_view'),
                                   dumps({"email": "test@gmail.com", "password": "pwd",
                                          "created": None, "last_modified": None}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 400)

    def test_register_email_is_invalid_format(self):
        """
        Test 'register' view with email that is invalid format.
        """

        request = self.client.post(reverse('register_view'),
                                   dumps({"email": "test_gmail.com", "password": "pwd",
                                          "created": None, "last_modified": None}),
                                   content_type='application/json')
        self.assertEqual(request.status_code, 400)

    def test_facebook_login(self):
        self.client.get('https://developers.facebook.com/checkpoint/test-user-login/107581666616749')
        request = self.client.get("http://triptrck.com/api/v1/auth/facebook_auth/")
        self.assertEqual(request.status_code, 302)

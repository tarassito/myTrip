"""myTrip URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url, include

urlpatterns = [
    url(r'^api/v1/like/', include('like.urls')),
    url(r'^api/v1/trip/', include('trip.urls')),
    url(r'^api/v1/auth/', include('registration.urls')),
    url(r'^api/v1/photo/', include('photo.urls')),
    url(r'api/v1/help/', include('help.urls')),
    url(r'^api/v1/profile/', include('profile.urls')),
    url(r'^api/v1/subscribe/', include('subscribe.urls')),
    url(r'.*', include('home.urls')),
]

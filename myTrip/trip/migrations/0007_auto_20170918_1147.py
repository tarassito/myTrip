# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-18 11:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0006_auto_20170906_1608'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trip',
            name='src',
            field=models.URLField(default='/static/src/img/default_trip_image.jpg'),
        ),
    ]
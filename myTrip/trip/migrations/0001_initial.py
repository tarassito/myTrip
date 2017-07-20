# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-11 07:35
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trip',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField()),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(blank=True, default=datetime.datetime.now)),
                ('status', models.IntegerField(default=0)),
            ],
        ),
    ]

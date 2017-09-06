# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-06 16:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('trip', '0005_auto_20170831_1032'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='finish',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='trip',
            name='start',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
        migrations.AlterField(
            model_name='trip',
            name='description',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='trip',
            name='status',
            field=models.IntegerField(null=True),
        ),
    ]
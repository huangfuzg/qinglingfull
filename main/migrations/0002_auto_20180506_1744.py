# Generated by Django 2.0.2 on 2018-05-06 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='post_time',
            field=models.DateTimeField(),
        ),
    ]

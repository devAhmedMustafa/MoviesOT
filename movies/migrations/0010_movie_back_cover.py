# Generated by Django 4.2.2 on 2023-06-19 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0009_movie_duration'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='back_cover',
            field=models.ImageField(blank=True, null=True, upload_to='covers'),
        ),
    ]

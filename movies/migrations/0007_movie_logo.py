# Generated by Django 4.2.2 on 2023-06-18 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_category_movie_slug_movie_subtitle_movie_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='logo',
            field=models.ImageField(null=True, upload_to='logos'),
        ),
    ]
# Generated by Django 4.2.2 on 2023-06-17 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_alter_movie_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='trailer',
            field=models.FileField(null=True, upload_to='movies_uploaded/'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='video',
            field=models.FileField(blank=True, null=True, upload_to='movies_uploaded/'),
        ),
    ]

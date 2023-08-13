from django.db import models
from django.template.defaultfilters import slugify
from .scraper import fetch_tomato
import os

class Category(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Movie(models.Model):

    category = models.ForeignKey(Category, on_delete=models.PROTECT, null=True, blank=True)
    title = models.CharField(max_length=3000)
    video = models.FileField(upload_to=f"movies_uploaded/", null=True, blank=True)
    trailer = models.FileField(upload_to=f"movies_uploaded/", null=True)
    release_date = models.DateField(null=True)
    cover = models.ImageField(upload_to="covers", null=True, blank=True)
    logo = models.ImageField(upload_to="logos", null=True)
    duration = models.FloatField(null=True, blank=True)
    description = models.CharField(max_length=10000, null=True)
    subtitle = models.FileField(upload_to="subtitles/", null=True, blank=True)
    slug = models.SlugField(null=True, unique=True, blank=True)
    back_cover = models.ImageField(upload_to="covers", null=True, blank=True,)
    rating = models.CharField(null=True, blank=True, max_length=3)

    def save(self, *args, **kwargs):

        if not self.slug:
            self.slug = slugify(self.title)

        return super().save(*args, **kwargs)

    def __str__(self):
        return self.title
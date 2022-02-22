from django.contrib import admin

from backend.views import user
from .models import User, postedJob
# Register your models here.
admin.site.register(postedJob)
admin.site.register(User)


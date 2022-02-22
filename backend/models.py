from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.


class CustomAccountManager(BaseUserManager):
    def create_user(self, userName, email, password, **other_fields):

        email = self.normalize_email(email)
        user = self.model(email=email, userName=userName, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, userName, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        return self.create_user(userName, email, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):
    userName = models.CharField(max_length=100, unique=True)
    compName = models.CharField(max_length=50, blank=True)
    firstName = models.CharField(max_length=50, blank=True)
    lastName = models.CharField(max_length=50, blank=True)
    email = models.EmailField(max_length=70, unique=True)
    bio = models.CharField(max_length=300, blank=True)
    signUpDate = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_recruiter = models.BooleanField(default=False)
    countryCode = models.CharField(max_length=5, blank=True)
    contactNumber = models.CharField(max_length=10, blank=True)
    dob = models.DateField(blank=True, null=True)
    address = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    skills = models.TextField(blank=True, default="")
    projects = models.TextField(blank=True, default="")
    linkGithub = models.URLField(blank=True)
    linkLinkedIn = models.URLField(blank=True)
    linkExtra = models.TextField(blank=True, default="")
    appliedJobsTo = models.TextField(blank=True, default="")

    objects = CustomAccountManager()

    USERNAME_FIELD = 'userName'
    REQUIRED_FIELDS = ['email']

    def __str(self):
        return self.userName

class postedJob(models.Model):
    jobDate = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=50)
    jobPos = models.CharField(max_length=50)
    desc = models.CharField(max_length=300)
    timing = models.CharField(max_length=50)
    reqSkill = models.TextField(blank=True)
    expLevel = models.CharField(max_length=50)
    postedBy = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    appliedPeople = models.TextField(blank=True, default="")


# 1. Delete your migrations files in your desired app
# 2. Thanks to raul answer: In the database: DELETE FROM django_migrations WHERE app = 'app_name'.
# 3. comment codes in models.py and all this models usage in views, signals and etc (to prevent error).
# 4. python manage.py makemigrations YOUR_APP_NAME
# 5. python manage.py migrate --fake
# 6. un-comment what you commented in step 3
# 7. python manage.py makemigrations YOUR_APP_NAME
# 8. migrate without --fake: python manage.py migrate

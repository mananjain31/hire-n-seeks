from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('userData', views.userData, name='userData'),
    path('user', views.user, name='user'),
    path('job-applied',views.userAppliedJobs, name='jobsApplied'),
    path('logouts', views.logouts, name='logouts'),
    path('post-for-recruitment', views.postJob,name='recruitment'),
    path('update', views.updateData,name='updateData'),
    path('jobs', views.jobs,name='jobs'),
    path('job-posted', views.jobPostedBy,name='jobPosted'),
    path('job/<jobPostID>', views.job,name='job'),
    path('apply/<jobPostID>', views.apply,name='applyJob'),
    path('cancelJob/<jobPostID>', views.cancelJob,name='cancelJob'),
    path('user/<userID>', views.userProfile, name='userProfile'),
]

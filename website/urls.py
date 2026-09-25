from django.contrib import admin
from django.urls import path

from website.views import home, news_detail


app_name = "website"
urlpatterns = [
    path('',home ,name='homepage' ),
    path(
        "news/<slug:slug>/",
        news_detail,
        name="news_detail",
    ),

]



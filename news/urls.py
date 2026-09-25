from django.urls import path

from . import views


app_name = "news"


urlpatterns = [

    path(
        "important-news/",
        views.important_news_list,
        name="important_news"
    ),

    path(
        "important-news/<int:news_id>/",
        views.important_news_detail,
        name="news_detail"
    ),

    path(
        "school-closures/",
        views.school_closures,
        name="school_closures"
    ),
]
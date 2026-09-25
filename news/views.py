from django.shortcuts import render, get_object_or_404

from .models import ImportantNews, SchoolClosure


def important_news_list(request):
    """
    نمایش اخبار مهم و تعطیلی مدارس در یک صفحه
    """

    news = ImportantNews.objects.filter(
        is_active=True
    )

    closures = SchoolClosure.objects.filter(
        is_active=True
    )

    context = {
        "news": news,
        "closures": closures,
    }

    return render(
        request,
        "news/important_news.html",
        context
    )


def important_news_detail(request, news_id):
    """
    نمایش جزئیات یک خبر مهم
    """

    news = get_object_or_404(
        ImportantNews,
        id=news_id,
        is_active=True
    )

    context = {
        "news": news
    }

    return render(
        request,
        "news/news_detail.html",
        context
    )


def school_closures(request):
    """
    نمایش جداگانه تعطیلی مدارس
    """

    closures = SchoolClosure.objects.filter(
        is_active=True
    )

    context = {
        "closures": closures,
    }

    return render(
        request,
        "news/school_closures.html",
        context
    )
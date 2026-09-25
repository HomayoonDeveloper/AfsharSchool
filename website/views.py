from django.shortcuts import get_object_or_404, render
from .models import News

def home(request):
    news = News.objects.filter(
        is_published=True
    )[:6]

    context = {
        "news": news,
    }

    return render(
        request,
        "home_page.html",
        context
    )


def news_detail(request, slug):
    news = get_object_or_404(
        News,
        slug=slug,
        is_published=True,
    )

    context = {
        "news": news,
    }

    return render(
        request,
        "news.html",
        context
    )
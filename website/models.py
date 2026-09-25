from django.db import models

from django.db import models
from django.urls import reverse


class News(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="عنوان خبر"
    )

    slug = models.SlugField(
        max_length=220,
        unique=True,
        verbose_name="لینک خبر"
    )

    image = models.ImageField(
        upload_to="news/",
        verbose_name="تصویر خبر"
    )

    content = models.TextField(
        verbose_name="متن خبر"
    )

    is_published = models.BooleanField(
        default=True,
        verbose_name="منتشر شود؟"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="تاریخ ایجاد"
    )

    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="آخرین ویرایش"
    )

    class Meta:
        verbose_name = "خبر"
        verbose_name_plural = "اخبار"
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse(
            "website:news_detail",
            kwargs={"slug": self.slug}
        )
class NewsImage(models.Model):
    image = models.ImageField(
        upload_to="news/",
    )
    news = models.ForeignKey(News, on_delete=models.CASCADE , related_name='images')
    def __str__(self):
        return self.news.title
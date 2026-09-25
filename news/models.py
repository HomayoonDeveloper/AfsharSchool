from django.db import models


class ImportantNews(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="عنوان خبر"
    )

    image = models.ImageField(
        upload_to="imnews/",
        verbose_name="تصویر خبر"
    )

    content = models.TextField(
        verbose_name="متن خبر"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="زمان انتشار"
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name="فعال"
    )

    class Meta:
        verbose_name = "خبر مهم"
        verbose_name_plural = "اخبار مهم"
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class SchoolClosure(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name="عنوان اطلاعیه"
    )

    image = models.ImageField(
        upload_to="imnews/",
        verbose_name="تصویر خبر"
    )

    province = models.CharField(
        max_length=100,
        verbose_name="استان"
    )

    city = models.CharField(
        max_length=100,
        blank=True,
        verbose_name="شهر"
    )

    closure_date = models.DateField(
        verbose_name="تاریخ تعطیلی"
    )

    description = models.TextField(
        blank=True,
        verbose_name="توضیحات"
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="زمان ثبت"
    )

    is_active = models.BooleanField(
        default=True,
        verbose_name="فعال"
    )

    class Meta:
        verbose_name = "تعطیلی مدرسه"
        verbose_name_plural = "تعطیلی مدارس"
        ordering = ["-closure_date"]

    def __str__(self):
        return self.title
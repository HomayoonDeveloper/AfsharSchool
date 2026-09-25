from django.contrib import admin
from django.contrib import admin
from django.utils.html import format_html

from .models import News, NewsImage


class NewsImageInline(admin.TabularInline):
    model = NewsImage

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "image_preview",
        "is_published",
        "created_at",
        "updated_at",
    )

    list_filter = (
        "is_published",
        "created_at",
    )


    search_fields = (
        "title",
        "content",
    )

    prepopulated_fields = {
        "slug": ("title",)
    }

    readonly_fields = (
        "created_at",
        "updated_at",
        "image_preview",
    )

    inlines = [NewsImageInline]

    list_per_page = 20

    fieldsets = (
        (
            "اطلاعات اصلی",
            {
                "fields": (
                    "title",
                    "slug",
                    "image",
                    "content",
                )
            },
        ),
        (
            "وضعیت انتشار",
            {
                "fields": (
                    "is_published",
                )
            },
        ),
        (
            "اطلاعات سیستمی",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                    "image_preview",
                ),
            },
        ),
    )

    @admin.display(description="پیش‌نمایش تصویر")
    def image_preview(self, obj):
        if not obj.image:
            return "تصویری وجود ندارد"

        return format_html(
            '<img src="{}" width="120" height="80" '
            'style="object-fit: cover; border-radius: 8px;" />',
            obj.image.url,
        )
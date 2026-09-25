from django.contrib import admin

from django.contrib import admin

from .models import ImportantNews, SchoolClosure


@admin.register(ImportantNews)
class ImportantNewsAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "created_at",
        "is_active",
    )

    list_filter = (
        "is_active",
        "created_at",
    )

    search_fields = (
        "title",
        "content",
    )

    list_editable = (
        "is_active",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )


@admin.register(SchoolClosure)
class SchoolClosureAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "province",
        "city",
        "closure_date",
        "created_at",
        "is_active",
    )

    list_filter = (
        "province",
        "closure_date",
        "is_active",
    )

    search_fields = (
        "title",
        "province",
        "city",
        "description",
    )

    list_editable = (
        "is_active",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-closure_date",
        "-created_at",
    )
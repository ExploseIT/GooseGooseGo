
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("goose.api.urls")),  # ✅ Add this if missing
]



from django.urls import path
from .views import GooseCoinInfoView

urlpatterns = [
    path("goosecoin/", GooseCoinInfoView.as_view(), name="goosecoin-info"),
]


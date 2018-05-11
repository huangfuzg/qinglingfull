"""qingling URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from main import views as main_views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('sendMail', main_views.sendMail),
    path('getNewsList', main_views.getAllNews),
    path('getNewsDetail', main_views.getNewsDetail),
    path('index', main_views.getIndex),
    path('product', main_views.getProduct),
    path('powercord', main_views.getPowercord),
    path('mobile_powercord', main_views.getMobilePowercord),
    path('news', main_views.getNews),
    path('mobile_product', main_views.getMobileProduct),
] + static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)

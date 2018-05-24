
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include
from django.contrib.auth import views as auth_view
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name='uHome'),
    path('login/', auth_view.LoginView.as_view(), name='login'),
    path('', include('backend.urls'))
]


urlpatterns += staticfiles_urlpatterns()

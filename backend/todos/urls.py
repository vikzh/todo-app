from django.urls import path
from .views import DetailedTodo, ListTodo


urlpatterns = [
    path('<int:pk>/', DetailedTodo.as_view()),
    path('', ListTodo.as_view()),
]

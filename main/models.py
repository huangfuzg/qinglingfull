from django.db import models

# Create your models here.

class News(models.Model):
	news_id = models.BigAutoField(primary_key=True)
	title = models.CharField(max_length=50)
	# author = models.CharField(max_length=30)
	post_time = models.DateTimeField(auto_now=False)
	content = models.TextField()
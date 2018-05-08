from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponse
import json
from main.models import News as news
from django.forms.models import model_to_dict
# Create your views here.

def sendMail(request):
	response = None
	try:
		toEmail = "sales@qinglingindustrial.com"
		data = json.loads(request.body)
		print(data)
		subject = data["subject"]
		name = data["name"]
		context = data["context"]
		email = data["email"]
		send_mail(subject, context+'\n'+"name:"+name+"\nemail:"+email, 'serveqingling@163.com',[toEmail])
		ret = {"success":True,"msg":"ok"}
		response = HttpResponse(json.dumps(ret))
	except Exception as e:
		print(e)
		ret = {"success":False,"msg":"error"}
		response = HttpResponse(json.dumps(ret))
	finally:
		return response #httpResponse(json.dump(ret))

def getAllNews(request):
	p_num = int(request.GET['page'])
	per_count = 10
	ret = {"data":{},"success":False}
	try:
		all_news = news.objects.all().order_by('post_time')
		ret['data']['news'] = []
		ret['data']['newsCount'] = len(all_news)
		if p_num*per_count < len(all_news):
			max_num = p_num*per_count
		else:
			max_num = len(all_news)
		cur_page_news = all_news[p_num*per_count-per_count:max_num]
		for new in cur_page_news:
			new = model_to_dict(new)
			print(new)
			data = {}
			data['id'] = new['news_id']
			data['title'] = new['title']
			data['post_time'] = new['post_time'].strftime('%Y-%m-%d %H:%M:%S')
			ret['data']['news'].append(data)
		ret['success'] = True
	except Exception as e:
		print (e)
		ret = {"data":{},"success":False}
		pass
	finally:
		return HttpResponse(json.dumps(ret))

def getNews(request):
	news_id = request.GET['news_id']
	ret = {"data":{},"success":False}
	try:
		new = news.objects.get(news_id=news_id)
		new = model_to_dict(new)
		ret['data']['id']=new['news_id']
		ret['data']['title'] = new['title']
		ret['data']['content'] = new['content']
		ret['data']['post_time'] = new['post_time'].strftime('%Y-%m-%d %H:%M:%S')
		ret['success'] = True
	except Exception as e:
		print(e)
		ret = {"data":{},"success":False}
		pass
	finally:
		return HttpResponse(json.dumps(ret))

def getIndex(request):
	return render(request,'index.html')

def getProduct(request):
	return render(request,'otherproduct.html')

def getPowercord(request):
	return render(request,'powercord.html')

def getNews(request):
	return render(request,'news.html')

def getMobilePowercord(request):
	return render(request,'p.html')

def getMobileProduct(request):
	return render(request,'product.html')
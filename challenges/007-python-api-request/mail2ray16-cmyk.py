import requests
my_api_key = "pc_live_8s2ab1ztxmsrzk45ijv41b1k8yoigjj3"
url = "https://provchart-api.devtem.org/api/v1/generate"
headers = {"X-Api-Key":my_api_key,"Content-Type":"application/json"}
data = {"type": "bar", "title": "Monthly Sales", "series": [{"name": "sales", "points": [20, 13, 26, 30, 25]}], "axisX": ["Jan", "Feb", "Mar", "Apr", "May"]}
response = requests.post(url,headers = headers,json = data)       
print(response.json())

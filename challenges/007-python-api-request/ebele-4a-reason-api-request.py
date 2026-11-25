import requests
import os
url = "https://provchart-api.devtem.org/api/v1/generate"
api = os.getenv("ProvChart_API_KEY")
if not api:
  raise ValueError("API KEY MISSING!!!!")
headers = {
  "X-API-Key": api,
  "Content-Type": "application/json"
} 
data = {
  "type" : "bar",
  "theme" :{
        "bg": "#171329",
        "surface": "#241D40",
        "muted": "#938BA8",
        "text": "#C0C0C0",
        "grid": "#493C70",
        "radius": "12px"
    },
    "series": [
      {
        "name" : "scores",
        "color" : "#00D9FF",
        "points" : [40, 55, 60, 80]
      }
    ],
    "axisX" : ["A", "B", "C", "D"]
}
try:
    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status() 
    print(response.status_code)
    result = response.json()
    print(result["success"])
    print(result["html"])
    print(result["css"])
    print(result["success"])
    print(response.text)

except requests.exceptions.RequestException as error:
    print("Request failed:", error)
    print(error.response.text if error.response else error)

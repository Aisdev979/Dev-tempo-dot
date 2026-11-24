import os
import json
import requests

URL = "https://provchart-api.devtem.org/api/v1/generate"

API_KEY = os.getenv("PROVCHART_API_KEY")

if not API_KEY:
    print("Error: API key not found.")
    print("Set your PROVCHART_API_KEY and try again.")
    exit()

headers = {
    "X-API-Key": API_KEY,
    "Content-Type": "application/json"
}

data = {
    "type": "bar",
    "theme": "midnight",
    "series": [
        {
            "name": "Scores",
            "color": "#65e692",
            "points": [40, 65, 80, 55, 90]
        }
    ],
    "axisX": ["A", "B", "C", "D", "E"]
}

print("Sending API request...")

try:
    response = requests.post(
        URL,
        headers=headers,
        json=data,
        timeout=30
    )

    response.raise_for_status()
    result = response.json()

    print("\n" + "=" * 35)
    print("       API REQUEST SUCCESSFUL")
    print("=" * 35)
    print(json.dumps(result, indent=4))

except requests.exceptions.HTTPError:
    print("\nHTTP Error:", response.status_code)
    print(response.text)

except requests.exceptions.Timeout:
    print("\nRequest timed out. Try again.")

except requests.exceptions.RequestException as e:
    print("\nConnection error:", e)

except ValueError:
    print("\nInvalid JSON response received from server.")

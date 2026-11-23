# Challenge 007 – Python API Request (ProvChart)

**Level:** 3–4  
**Language:** Python  
**Deadline:** 48 hours

## Goal
Practice making real API calls using Python.

## Steps

1. Get a free API key from [ProvChart Dashboard](https://chart.devtem.org/dashboard)
2. Use the `requests` library
3. Send a POST request to ProvChart
4. Print the response (especially `html` or full JSON)

## Requirements

- Use `requests.post()`
- Include the `X-API-Key` header
- Send a valid chart configuration
- Print the result cleanly
- Handle basic errors

## Example

```python
import requests

url = "https://provchart-api.devtem.org/api/v1/generate"
headers = {
    "X-API-Key": "your_free_key_here",
    "Content-Type": "application/json"
}

data = {
    "type": "bar",
    "theme": "midnight",
    "series": [
        {
            "name": "Scores",
            "color": "#8b7bff",
            "points": [40, 65, 50, 80]
        }
    ],
    "axisX": ["A", "B", "C", "D"]
}

response = requests.post(url, json=data, headers=headers)
print(response.json())
```

## Submission
Create `your-github-handle.py`

# Engineered by Omonire (github.com/omonire)
# Challenge 007 - Python API Request (ProvChart)

import json
import os

import requests

# This is the public address of the ProvChart API.
# The API key is not written here because secret keys should not live in code.
API_URL = "https://provchart-api.devtem.org/api/v1/generate"
TIMEOUT_SECONDS = 15


def get_api_key():
    # Read the key from an environment variable instead of hardcoding it.
    # This keeps the real key out of GitHub and out of this solution file.
    return os.environ.get("PROVCHART_API_KEY", "").strip()


def build_chart_config():
    # This dictionary is the chart configuration.
    # requests turns it into JSON when we pass it with the json= argument.
    chart = {
        "type": "bar",
        "theme": "midnight",
        "series": [
            {
                "name": "Scores",
                "color": "#8b7bff",
                "points": [40, 65, 50, 80],
            }
        ],
        "axisX": ["A", "B", "C", "D"],
    }

    return chart


def generate_chart(api_key):
    # The header tells ProvChart who is making the request.
    # The json= argument sends the chart configuration as a JSON body.
    headers = {
        "X-API-Key": api_key,
        "Content-Type": "application/json",
    }

    response = requests.post(
        API_URL,
        json=build_chart_config(),
        headers=headers,
        timeout=TIMEOUT_SECONDS,
    )

    # If the status code is 400 or 500, this line raises an error.
    # That is useful because we can handle all request problems in one place.
    response.raise_for_status()

    # The API sends JSON, so json() changes the text into a Python dictionary.
    return response.json()


def print_result(result):
    # The html value is the chart itself, so show it first.
    # After that, print the full JSON so the whole response can be inspected.
    if "html" in result:
        print("Generated chart HTML:")
        print(result["html"])
        print("")

    print("Full JSON response:")
    print(json.dumps(result, indent=2))


def main():
    api_key = get_api_key()

    # A missing key cannot call a protected API, so stop before making a request.
    if api_key == "":
        print("Please set your API key before running this script.")
        print("Example: $env:PROVCHART_API_KEY='your_key_here'")
        return

    try:
        result = generate_chart(api_key)
    except requests.exceptions.RequestException as error:
        # This catches network errors, timeouts, and bad HTTP status codes.
        print("API request failed: " + str(error))
        return
    except ValueError:
        # This catches the case where the API does not return valid JSON.
        print("The API response was not valid JSON.")
        return

    print_result(result)


if __name__ == "__main__":
    main()

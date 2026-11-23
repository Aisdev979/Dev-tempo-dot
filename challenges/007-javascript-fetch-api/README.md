# Challenge 007 – JavaScript Fetch API (ProvChart)

**Level:** 3–4  
**Language:** JavaScript + HTML  
**Deadline:** 48 hours

## Goal
Learn how to work with a **real product API**.

You will use the **ProvChart API** to generate a chart.

## Steps

1. Go to [https://chart.devtem.org/dashboard](https://chart.devtem.org/dashboard)
2. Create a free account (if you don’t have one)
3. Generate a free API key
4. Use `fetch()` to call the ProvChart API
5. Display the returned chart on your page

## Requirements

- Use `fetch()` with `POST`
- Send a valid JSON body (example below)
- Display the returned `html` and `css` on the page
- Handle errors (invalid key, network error, etc.)

## Example Request Body

```json
{
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
```

## API Endpoint
`POST https://provchart-api.devtem.org/api/v1/generate`

Header needed:
```
X-API-Key: your_free_key_here
Content-Type: application/json
```

## Submission
Create a folder with your GitHub handle containing:
- `index.html`
- `main.js`
- `style.css` (optional)

**Important:** Do not hardcode your real API key in public code if possible. For learning purposes in this challenge it is allowed, but be careful.

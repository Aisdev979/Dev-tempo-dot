// Engineered by Omonire (github.com/omonire)
// Challenge 007 - JavaScript Fetch API (ProvChart)

// Grab the elements once. This is easier than looking them up again and again.
var apiKeyInput = document.getElementById("apiKeyInput");
var generateButton = document.getElementById("generateButton");
var message = document.getElementById("message");
var chartStyle = document.getElementById("chartStyle");
var chartOutput = document.getElementById("chartOutput");

// This is the public API address. The secret key comes from the input box.
var API_URL = "https://provchart-api.devtem.org/api/v1/generate";


function buildChartConfig() {
  // This object is the chart we want the API to draw.
  // JSON.stringify() will change it into the JSON body of the request.
  var chart = {
    type: "bar",
    theme: "midnight",
    series: [
      {
        name: "Scores",
        color: "#8b7bff",
        points: [40, 65, 50, 80],
      }
    ],
    axisX: ["A", "B", "C", "D"],
  };

  return chart;
}


function showMessage(text, state) {
  // textContent is used for messages so the page treats the text as plain text.
  message.textContent = text;
  message.className = state;
}


function setLoading(isLoading) {
  // A disabled button stops a user from sending the same request twice.
  generateButton.disabled = isLoading;
  generateButton.textContent = isLoading ? "Generating..." : "Generate chart";
}


function clearOldChart() {
  // Remove the previous chart before showing a new one.
  // Otherwise old CSS and old HTML would remain on the page.
  chartStyle.textContent = "";
  chartOutput.innerHTML = "";
}


function displayChart(result) {
  // Clear first so this function always starts from a clean page.
  clearOldChart();

  // The API sends CSS and HTML as strings.
  // A style tag can hold CSS, and innerHTML can place HTML inside the page.
  chartStyle.textContent = result.css || "";
  chartOutput.innerHTML = result.html || "";
}


function generateChart() {
  var apiKey = apiKeyInput.value.trim();

  // A protected API needs a key, so stop early if the input box is empty.
  if (apiKey === "") {
    showMessage("Please paste your API key first.", "error");
    return;
  }

  showMessage("Talking to ProvChart...", "info");
  setLoading(true);

  // fetch() returns a Promise. A Promise is a value that will be ready later.
  fetch(API_URL, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildChartConfig()),
  })
    .then(function (response) {
      // fetch() does not throw for 400 or 500 status codes by itself.
      // So we check response.ok and throw our own error when needed.
      if (!response.ok) {
        return response.text().then(function (errorText) {
          throw new Error("HTTP " + response.status + ": " + errorText);
        });
      }

      // Convert the JSON response text into a JavaScript object.
      return response.json();
    })
    .then(function (result) {
      // The chart has arrived, so put it on the page.
      displayChart(result);
      showMessage("Chart generated successfully.", "success");
      setLoading(false);
    })
    .catch(function (error) {
      // Network failures, bad JSON, and HTTP errors all land here.
      showMessage("Request failed: " + error.message, "error");
      setLoading(false);
    });
}


// Connect the button to the function above.
generateButton.addEventListener("click", generateChart);

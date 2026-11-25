// DOM references
const chartForm = document.querySelector("#chart-config-form");
const apiKeyInput = document.querySelector("#api-key-input");
const apiKeyError = document.querySelector("#api-input-error");
const chartTypeSelect = document.querySelector("#chart-type-select");
const generateButton = document.querySelector("#chart-config-submit");

const resultPanel = document.querySelector("#chart-config-status");
const loadingState = resultPanel.querySelector(".chart-result-loading");
const emptyState = resultPanel.querySelector(".chart-result-empty");
const emptyStateMessage = emptyState.querySelector("p");

const CHART_API_URL = "https://provchart-api.devtem.org/api/v1/generate";

/* The API returns the chart's HTML and CSS separately, so the CSS gets its
  own <style> tag and the HTML gets a container inside the result panel
*/
const chartStyleTag = document.createElement("style");
const chartOutput = document.createElement("div");
chartOutput.className = "chart-output";

//append chartStyleTag on the html head
document.head.appendChild(chartStyleTag);
//append the returned data to resultPanel
resultPanel.appendChild(chartOutput);

// Making Request to provchart api - POST method
const fetchChart = async (apiKey, chartType) => {
  const response = await fetch(CHART_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({
      type: chartType,
      theme: "midnight",
      series: [
        {
          name: "Scores",
          color: "#8b7bff",
          points: [40, 65, 50, 80],
        },
      ],
      axisX: ["A", "B", "C", "D"],
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Could not generate the chart");
  }

  return result;
};

// Validation api key input field
const validateInputs = (apiKey) => {
  const errors = {};

  if (!apiKey) errors.apiKey = "API key is required and can't be empty";

  return errors;
};

/* Result panel
this is a state that when a use use click the button the loading is pass to the state and when loading = loading it shows the loading spinner
same concept for empty and chartOutput
*/
const setResultState = (state) => {
  loadingState.hidden = state !== "loading";
  emptyState.hidden = state !== "empty";
  chartOutput.hidden = state !== "chart";
  resultPanel.setAttribute("aria-busy", state === "loading");
};

/*
As showing in the above comment, this shows empty error message when empty = empty whil the others are hidden
*/
const showResultError = (message) => {
  emptyStateMessage.textContent = message;
  setResultState("empty");
};

//display the result html and css on the UI
const displayChart = ({ html, css }) => {
  chartStyleTag.textContent = css;
  chartOutput.innerHTML = html;
  setResultState("chart");
};

// Listen for an event
chartForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const apiKey = apiKeyInput.value.trim();
  const errors = validateInputs(apiKey);

  //this display the custom error if it is not undefined or null otherwise it display and empty string
  apiKeyError.textContent = errors.apiKey ?? "";

  //same state rule as demonstrated above
  setResultState("loading");
  
  // Blocking double clicks
  generateButton.disabled = true;

  try {
    const chart = await fetchChart(apiKey, chartTypeSelect.value);
    displayChart(chart);
  } catch (error) {
    showResultError(error.message);
  } finally {
    //this allow use make another request instead of completely blocking the button
    generateButton.disabled = false;
  }
});

//same concept as discuss above
setResultState("empty");

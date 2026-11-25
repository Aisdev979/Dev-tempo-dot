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

// The API returns the chart's HTML and CSS separately, so the CSS gets its
// own <style> tag and the HTML gets a container inside the result panel
const chartStyleTag = document.createElement("style");
const chartOutput = document.createElement("div");
chartOutput.className = "chart-output";

document.head.appendChild(chartStyleTag);
resultPanel.appendChild(chartOutput);

// Request
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
      // Sample data until the user can supply their own
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

// Validation
const validateInputs = (apiKey) => {
  const errors = {};

  if (!apiKey) errors.apiKey = "API key is required and can't be empty";

  return errors;
};

// Result panel
const setResultState = (state) => {
  loadingState.hidden = state !== "loading";
  emptyState.hidden = state !== "empty";
  chartOutput.hidden = state !== "chart";
  resultPanel.setAttribute("aria-busy", state === "loading");
};

const showResultError = (message) => {
  emptyStateMessage.textContent = message;
  setResultState("empty");
};

const displayChart = ({ html, css }) => {
  chartStyleTag.textContent = css;
  chartOutput.innerHTML = html;
  setResultState("chart");
};

// Form
chartForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const apiKey = apiKeyInput.value.trim();
  const errors = validateInputs(apiKey);

  apiKeyError.textContent = errors.apiKey ?? "";
  if (Object.keys(errors).length > 0) return;

  setResultState("loading");
  // Free keys only get a handful of generations, so block double clicks
  generateButton.disabled = true;

  try {
    const chart = await fetchChart(apiKey, chartTypeSelect.value);
    displayChart(chart);
  } catch (error) {
    showResultError(error.message);
  } finally {
    generateButton.disabled = false;
  }
});

setResultState("empty");

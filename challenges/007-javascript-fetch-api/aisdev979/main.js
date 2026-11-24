//DOM Reference
const apiKey = document.querySelector("#api-key-input");
const chartBtn = document.querySelector("#chart-config-submit");

//fatch the data
const getData = async (apiKey, type = "bar") => {
    const response = await fetch("https://provchart-api.devtem.org/api/v1/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey
        },
        body: JSON.stringify({
            "type": type,
            "theme": "midnight",
            "series": [
                {
                "name": "Scores",
                "color": "#8b7bff",
                "points": [40, 65, 50, 80]
                }
            ],
            "axisX": ["A", "B", "C", "D"]
        })
    });

    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    return data
}

//preform error handling
const validateInput = (apiKey) => {
  const errors = {};

  if (!api) errors.apiKey = "Api Key is required and can't be empty";

  return errors;
};

//display data
const displayData = () => {

}

chartBtn.addEventListener("click", (event) => {
    console.log(event.currentTarget.previousElementSibling.querySelector("select").value)
})
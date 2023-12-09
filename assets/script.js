var APIKey = "1eae1e8e33a4224916c970cd7d0ffa0f";

const apiURL = "https://api.openweathermap.org/data/2.5/forecast/";

const city = "";

const query = apiURL + "q=" + city + "&appid=" + APIKey;

const cityIntput = document.getElementById("city");

const seachBtn = document.getElementById("search");

seachBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(cityIntput.value);
  console.log("clicked");
});

function getWeather() {
  fetch(query)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}


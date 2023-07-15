function displayTemperature(response) {
  let celseuisTemperature = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celseuisTemperature;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let HumidityElement = document.querySelector("#Humidity");
  HumidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let icon = response.data.weather[0].icon;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );
}

function search(city) {
  let Apikey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  search(cityInput.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

function displayFahreinheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let fareinheit = Math.round((celseuisTemperature * 9) / 5 + 32);
  temperature.innerHTML = fareinheit;
}

let celseuisTemperature = null;
let fahreinheiLink = document.querySelector("#fahreinheit");
fahreinheiLink.addEventListener("click", displayFahreinheit);

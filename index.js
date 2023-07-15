function displayTemperature(response) {
  celseuisTemperature = Math.round(response.data.main.temp);
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
  let time = document.querySelector("#time");
  time.innerHTML = formatDate(response.data.dt * 1000);
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

let fahreinheiLink = document.querySelector("#fahreinheit");
fahreinheiLink.addEventListener("click", displayFahreinheit);

function displayCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celseuisTemperature;
}

let celsuisLink = document.querySelector("#celsius");
celsuisLink.addEventListener("click", displayCelsius);
let celseuisTemperature = null;

function formatDate(timestamp) {
  let today = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today.getDay()];

  let hour = today.getHours();

  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hour}:${minutes}`;
}

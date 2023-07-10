let Apikey = "17ad6e67aa629189f73b053634668b20";
let city = "Mbabane";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;

function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let HumidityElement = document.querySelector("#Humidity");
  HumidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.wind.speed;
  console.log(response.data.weather);
}

axios.get(apiUrl).then(displayTemperature);

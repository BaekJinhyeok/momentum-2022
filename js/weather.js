const API_KEY = "786ac2141b19a0be71215f6d0e0b5881";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(lat, long);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const wheather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      wheather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find you. No wether for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

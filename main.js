import './style.css'
import javascriptLogo from './javascript.svg'

const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")

search.addEventListener("click", () => {

  const APIkey = "4b2352e7643ab811106c40916802e69e";
  const city = document.querySelector(".search-box input").value;

  if (city === "")
    return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {

        if (json.cod === "404") {
          container.style.height = "400px";
          weatherBox.style.display = "none";
          weatherDetails.style.display = "none";
          error404.style.display = "block";
          error404.classList.add("fadeIn");
          return;
        }

        error404.style.display = "none";
        error404.classList.remove("fadeIn");

        const image = document.querySelector('.weather-box img');
        const quote = document.querySelector('.weather-box .quote');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
          case "Clear":
            image.src = "images/cliar.jpeg";
            break;

          case "Rain":
            image.src = "images/rain.jpg";
            break;

          case "Snow":
            image.src = "images/snow.webp";
            break;

          case "Clouds":
            image.src = "images/clouds.png";
            break;

          case "Haze":
            image.src = "images/fog.png";
            break;

          case "Mist":
            image.src = "images/haze.png";
            break;

          case "Fog":
            image.src = "images/fog.png";
            break;

          case "Drizzle":
            image.src = "images/drizzle.jpeg";
            break;

          default:
            image.src = "";
        }

        switch (json.weather[0].main) {
          case "Clear":
            quote.innerHTML = "Florida Stanley Is Who You Want On Your Florida Team";
            break;

          case "Rain":
            quote.innerHTML = "Rain, wether inside or outside.";
            break;

          case "Snow":
            quote.innerHTML = "Be aware of snowman.";
            break;

          case "Clouds":
            quote.innerHTML = "It would rain if they were altocumulus, not cirrostratus.";
            break;

          case "Haze":
            quote.innerHTML = "The fire is shooting at us!";
            break;

          case "Mist":
            quote.innerHTML = "Not this kind of mist.";
            break;

          case "Fog":
            quote.innerHTML = "Today smoking is going to save lives.";
            break;

          case "Drizzle":
            quote.innerHTML = "Time to wear your blue rain poncho.";
            break;

          default:
            quote.innerHTML = "";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>??C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = "";
        weatherDetails.style.display = "";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        container.style.height = "590px";
  });

});

var x = document.getElementById("demo");
const getLocation = () => {
  const APIkey = "4b2352e7643ab811106c40916802e69e";
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

  const lat = navigator.geolocation.coords.latitude
  const lon = navigator.geolocation.coords.longitude

  const city = ""
  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${APIkey}`)
    .then(response => response.json())
    .then(json => {
      const citi = json.name[0].main;
      city.replace(citi);
  })

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {

        if (json.cod === "404") {
          container.style.height = "400px";
          weatherBox.style.display = "none";
          weatherDetails.style.display = "none";
          error404.style.display = "block";
          error404.classList.add("fadeIn");
          return;
        }

        error404.style.display = "none";
        error404.classList.remove("fadeIn");

        const image = document.querySelector('.weather-box img');
        const quote = document.querySelector('.weather-box .quote');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
          case "Clear":
            image.src = "images/cliar.jpeg";
            break;

          case "Rain":
            image.src = "images/rain.jpg";
            break;

          case "Snow":
            image.src = "images/snow.webp";
            break;

          case "Clouds":
            image.src = "images/clouds.png";
            break;

          case "Haze":
            image.src = "images/fog.png";
            break;

          case "Mist":
            image.src = "images/haze.png";
            break;

          case "Fog":
            image.src = "images/fog.png";
            break;

          case "Drizzle":
            image.src = "images/drizzle.jpeg";
            break;

          default:
            image.src = "";
        }

        switch (json.weather[0].main) {
          case "Clear":
            quote.innerHTML = "Florida Stanley Is Who You Want On Your Florida Team";
            break;

          case "Rain":
            quote.innerHTML = "Rain, wether inside or outside.";
            break;

          case "Snow":
            quote.innerHTML = "Be aware of snowman.";
            break;

          case "Clouds":
            quote.innerHTML = "It would rain if they were altocumulus, not cirrostratus.";
            break;

          case "Haze":
            quote.innerHTML = "The fire is shooting at us!";
            break;

          case "Mist":
            quote.innerHTML = "Not this kind of mist.";
            break;

          case "Fog":
            quote.innerHTML = "Today smoking is going to save lives.";
            break;

          case "Drizzle":
            quote.innerHTML = "Time to wear your blue rain poncho.";
            break;

          default:
            quote.innerHTML = "";
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>??C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = "";
        weatherDetails.style.display = "";
        weatherBox.classList.add("fadeIn");
        weatherDetails.classList.add("fadeIn");
        container.style.height = "590px";
      });
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

const dotBtn = document.querySelector('.fa-location-dot');
dotBtn.addEventListener("click", () => {
    getLocation();
})



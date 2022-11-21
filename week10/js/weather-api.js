const LAT = "64.835365"
const LON = "-147.776749"
const API_key = "fc0a6c0132d6bc829f38fda505618929";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_key}&units="imperial"`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  showWeather(jsObject);
});

function showWeather(obj){
    let currentTemp = document.querySelector("#current-temp");
    let iconpath = document.querySelector("#icon-src");
    let weathericon = document.querySelector("#weathericon");
    let figurecaption = document.querySelector("#figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currentTemp.textContent = obj.main.temp;
    iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;

}
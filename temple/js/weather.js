
const LAT = "40.758701"
const LON = "-111.876183"
const API_key = "fc0a6c0132d6bc829f38fda505618929";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_key}&units=imperial`;

//const windchillobj = document.getElementById("windChill");
//const windspeedobj = document.getElementById("windSpeed");

//let windchillmsg = "N/A";
//let temp = obj.main.temp;
//let windspeed = obj.wind.speed;

//if (temp <= 50 && windspeed > 3){
 // let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
//  windchillmsg = `${chill}°F`;
//}
//windspeedobj.textContent = windspeed;
//windchillobj.textContent = windchillmsg;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  showWeather(jsObject);
  displayWindhill(jsObject);
});

function showWeather(obj){
    let windspeedobj = document.querySelector("#windSpeed");
    windspeedobj.textContent = obj.wind.speed;
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


/*let windchillobj = document.querySelector("#windChill");
if (currentTemp < 50 && windchillobj > 3){
  let chill = Math.round((35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(windspeedobj,0.16)) + (0.4275*currentTemp*Math.pow(windchillobj,0.16)));
  windchillobj.textContent = `${chill}°F`;
}
*/
function displayWindhill(obj){
let windSpeedMiles = obj.wind.speed;
//
let degreesTemp = obj.main.temp;
// 

let windchillobj = document.querySelector("#windChill");

if (degreesTemp > 50 && windSpeedMiles > 3){
  let chill = Math.round((35.74 + (0.6215 * degreesTemp))-(35.75 * Math.pow(windSpeedMiles,0.16)) + (0.4275*degreesTemp*Math.pow(windSpeedMiles,0.16)));
  windchillobj.textContent = `${chill}°F`;

} else{
  windchillobj.textContent = 'N/A';
};


}
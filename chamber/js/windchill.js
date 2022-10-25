let temp = 49;
let windspeed = 10;




let temperature = document.querySelector("#temperature");
let windspeedobj = document.querySelector("#windspeed");
let windchillobj= document.querySelector("#windchill");

function setWindCHill(temp, windspeed) {
    let windchillmsg = "n/a";

if(temp <=50 && windspeed > 3){
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    windchillmsg = `${chill}&deg; F`;

    //populate the dom
temperature.textContent = temp;
windspeedobj.textContent = windspeed;
windchillobj.innerHTML= windchillmsg; 
}


}

//references to dom, get from spans in html



//calc windspeed if necessary

setWindCHill(44, 10);
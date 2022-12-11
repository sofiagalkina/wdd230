const requestURL = './data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const temple = jsonObject["temples"]
    temple.forEach(displayCards);

  });

  /*function displayCards(card){
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `<img src="${card.imagesURL}">
    <p>${card.address} ${card.history}</p>
    <p>${card.telephone}</p>`;
    cardview.appendChild(cardelt);
}

*/

function displayCards(card){
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `<img src="${card.imagesURL}"> 
    <h2>${card.name} <span id='heart'>&#9825;</span></h2>
    <p>${card.history} </p>
    <p><strong>Address:</strong> ${card.address}</p>
    <p><strong>Phone Number:</strong> ${card.telephone}</p>
    <p><strong>Email:</strong> ${card.email}</p>
    <p><strong>Services:</strong> ${card.services}</p>

    <ul><li><strong>Ordinance Schedule:</strong> ${card.ordinance_schedule}</li>
    <li><strong>Session Schedule:</strong> ${card.session_schedule}</li>
    <li><strong>Closure Schedule:</strong>  ${card.closure_schedule}</li></ul>`;
    cardview.appendChild(cardelt);
}



const like = document.getElementById('heart');

like.addEventListener('click', function onClick() {
    like.style.backgroundColor = 'pink';
    like.style.color = 'white';
});
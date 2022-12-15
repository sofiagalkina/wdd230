const requestURL = './data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const temple = jsonObject["temples"]
    temple.forEach(displayCards);
   

  })
  .then( ()=>{
    likeslist.forEach(displayLike);
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





// check to see whether there's already anything in the storage in the first place 
const LIKES_KEY = "temple-likes";
let likes_string = localStorage.getItem(LIKES_KEY);
if (likes_string==null){
  likes_string="[]";
  localStorage.setItem(LIKES_KEY, likes_string);
}


// turning string to an array
let likeslist = JSON.parse(likes_string);

// displaying temple cards 
function displayCards(card){
  let cardview = document.querySelector('#cardview');
  let cardelt = document.createElement("div");
  cardelt.innerHTML = `<img src="${card.imagesURL}"> 
  <span>${card.name}</span> <input class="mycheck" type="checkbox" id="check-${card.id}  onclick="likeTemple(this);">
  <p>${card.history} </p>
  <p><strong>Address:</strong> ${card.address}</p>
  <p><strong>Phone Number:</strong> ${card.telephone}</p>
  <p><strong>Email:</strong> ${card.email}</p>
  <p><strong>Services:</strong> ${card.services}</p>

  <p><strong>Ordinance Schedule:</strong> ${card.ordinance_schedule}</p>
  <p><strong>Session Schedule:</strong> ${card.session_schedule}</p>
  <p><strong>Closure Schedule:</strong>  ${card.closure_schedule}</p>`;
  cardview.appendChild(cardelt);
}

function likeTemple(item){
  let likes_string = localStorage.getItem(LIKES_KEY);
  let likeslist = JSON.parse(likes_string);
  if (item.checked){
    if (!likeslist.includes(item.id)){
      likeslist.push(item.id);
    }
  }
  else{
    if (likeslist.includes(item.id)){
      likeslist.splice(likeslist.indexOf(item.id), 1);
    }
  }
  localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}



function displayLike(item){
  let obj = document.getElementById(item);
  obj.checked = true;
}
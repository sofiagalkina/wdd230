
let cardSelector = document.querySelector("#cardselect");
let listSelector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");


cardSelector.addEventListener('click', ()=>{

  cardview.style.display='grid';
  listview.style.display='none';
  cardSelector.style.opacity=1.0;
  listSelector.style.opacity=0.5;
});

listSelector.addEventListener('click', ()=>{
  cardview.style.display='none';
  listview.style.display="block";
  cardSelector.style.opacity=0.5;
  listSelector.style.opacity=1.0;
});

const requestURL = './data/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const bizlist = jsonObject["businesses"]
    bizlist.forEach(displayCards);
    bizlist.forEach(displayBusinessList);
  });


function displayCards(card){
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `<img src="${card.imageURL}">
    <p>${card.street} ${card.cityandzip}</p>
    <p>${card.phone}</p>
    <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>`;
    cardview.appendChild(cardelt);
}

function displayBusinessList(biz){
    let card = document.createElement("tr");
    card.innerHTML=`<td>${biz.name}</td>
    <td>${biz.street}<br>${biz.cityandzip}</td>
    <td>${biz.phone}</td>
    <td><a href="${biz.websiteURL}">${biz.websiteURL}</a></td>`;

    document.querySelector("#listview table").appendChild(card);
}


let cardSelector = document.querySelector("#cardselect");
let listSelector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardSelector.addEventListener('click', ()=>(
    cardview.style.display='grid';
    listview.style.display="none";
    cardSelector.style.opacity=1.0;
    listSelector.style.opacity=0.5;

));













function displayCards(card){
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    card.innerHTML = `
    <div>
    <img src="${card.imageURL}">
    <p>${card.street} ${card.citystatezip}</p>
    <p>${card.phone}</p>
    <p><a href=${"somesite.com">https://somesite.com</a></p>
</div>
`
}


function displayBusinessList(biz){
    let card = document.createElement("tr");
    card.innerHTML
}


const requestURL = "./data/data.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    
    const bizlist = jsonObject["prophets"]
    bizlist.forEach(displayCards);
    bizlist.forEach(displayList);
  });
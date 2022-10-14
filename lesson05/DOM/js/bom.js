/*
const addChapterButton = document.getElementById('addChapter');
const chapterContainer = document.getElementById('chapterContainer');
const inputField = document.getElementById('inputField');

addChapterButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value; 
    chapterContainer.appendChild(paragraph);
    inputField.value = "";
})
*/

/*
const inputField = document.getElementById('favchap');
const addButton = document.getElementById('addButton');
const listElements = document.getElementById('list-container');

addButton.addEventListener('click', function(){
    var element = document.createElement('li');
    element.innerText = inputField.value;
    listElements.appendChild(element);
    inputField.value='';
})


const listItem = document.createElement('li');
const spanItem = document.createElement('span');
const buttonItem = document.createElement('button');

listItem.appendChild(spanItem);
spanItem.textContent = inputField.value;
listItem.appendChild(buttonItem);
buttonItem.textContent='Delete';
inputField.appendChild(listItem);

buttonItem.addEventListener('click', () => {
    inputField.removeChild(listItem);
});

*/

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = ' ';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listButton);
    listButton.textContent = '❌ ';

    list.appendChild(listItem);

    listButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();


});
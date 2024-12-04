/**
 * DOM API
 * Kuidas kasutada Javascripti HTMLi manipuleerimiseks.
 * Saab kasutada HTML dokumente, kuhu on seotud see js fail.
 */

const h1Element = document.querySelector('h1');
console.log(h1Element);
h1Element.innerText = "Head teed!";

const fruits = ["Apple", "Orange", "Banana", "Mango", "Kiwi"];

const fruitListContainer = document.querySelector('#fruit-list'); //Leiame konteineri fruit-list id'ga
const orderedListElement = document.createElement('ol'); //Loome ordered list elemendi

for(let i = 0; i < fruits.length; i++) {
    const listElement = document.createElement('li'); //Loome list elemendi
    listElement.innerText = fruits[i]; //Anname elemendile arrayst väärtuse
    orderedListElement.appendChild(listElement); //Määrame elemendi listi lapseks
}

fruitListContainer.appendChild(orderedListElement); //Lisame listi fruit-list konteinerisse


//UUS ÜLESANNE - EVENT DRIVEN

const dontTouchMeButton = document.querySelector('#dont-touch-me-button'); //Leiame dokumendist nupu

dontTouchMeButton.addEventListener('click', (event) => {  //Lisame javascripti kuulaja, toimub kui klikitakse. Teeme funktsiooni
    console.log(event); //näeme konsoolis evendi infot
    alert("Ei tohtinud ju."); //brauser annab teavituse
}); 
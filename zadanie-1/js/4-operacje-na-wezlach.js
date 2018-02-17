"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[3];   //przypisz do zmiennej istniejacy wezel, musi byc na górze


var newElement = document.createElement('p');   //stworz nowy element p
console.log(newElement);

var newElementContent = document.createTextNode('To jest nowy paragraf');  //stworz nowy tekst zdla elementu p 
console.log(newElementContent);

newElement.appendChild(newElementContent);   //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement);   //dodaje do strony paragraf z tekstem


istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);
// zamien drugi link na paragraf

var alllinks = document.getElementsByTagName('a');  //przypisz do zmiennej tablice ze wszystkimi linkami, 
//var alllinks = document.querySelectorAll('a');  //alternatywa

//console.log(alllinks);
//Array.form("nodeList");

for (var i = 0; i < alllinks.length; i++) {   //iteracja po tablicy
    var br = document.createElement('br');  //stworz element <br>
    //console.log(allLinks[i].parentNode);
    alllinks[i].parentNode.insertBefore(br, alllinks[i].nextSibling);  //dodaj br po każdym linku (br - co wstawiamy, allLinks - za czym wstawiamy),  alllinks[i].parentNode -element do ktorego sie odwolujemy, .insertBefore(br, alllinks[i].nextSibling); - metoda jaka wykonujemy na tym elemencie
    alllinks[i].removeAttribute('class');  //usuń atrybut klasa dla kazdego linku
}



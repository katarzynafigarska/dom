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
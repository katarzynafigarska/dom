"use strict";

var mainHeader = document.getElementById('main-header');   //przypisujemy naglowek strony do zmiennej
mainHeader.innerHTML = "Treśc nagłówka";   //Podajemy tresc do naglowka

mainHeader.outerHTML = "<p>Treśc nagłówka</p>";

var link = document.getElementsByClassName('link')[0];   //przypisujemy link do pierwszej zmiennej
link.href = "http://akademia108.pl";   //podajemy gdzie ma nas przekierowac

link.className = "nowa-klasa";    //nadpisujemy nazwe klasy (zmieniamy)

link.classList.add("nowa-nowa-klasa"); //dodajemy nowa klasę

link.style.backgroundColor = "yellow";

//console.log(link.classList);
"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let spielstart = document.querySelector("#Startbutton");
    spielstart.addEventListener("click", outputs);
}
let cards = ["Q", "Q", "W", "W", "E", "E", "R", "R", "T", "T", "Z", "Z", "U", "U", "I", "I", "O", "O", "P", "P", "A", "A", "S", "S", "D", "D", "F", "F", "G", "G", "H", "H", "J", "J", "K", "K", "L", "L", "M", "M", "X", "X", "C", "C", "V", "V", "B", "B", "N", "N"];
let globalArray = [];
let cardpairs;
let cardsize;
let backgroundcolor;
let cardcolor;
let fontcolor;
let font;
function outputs() {
    let formdata = new FormData(document.forms[0]);
    for (let entry of formdata.entries()) {
        switch (entry[0]) {
            case "cardpairs":
                cardpairs = Number(entry[1]);
                break;
            case "cardsize":
                cardsize = Number(entry[1]);
                break;
            case "backgroundcolor":
                backgroundcolor = entry[1].toString();
                break;
            case "cardcolor":
                cardcolor = entry[1] + "";
                break;
            case "fontcolor":
                fontcolor = String(entry[1]);
                break;
            case "font":
                font = entry[1].toString();
                break;
            default:
                break;
        }
        console.log(entry);
    }
    newArray();
}
// hier werden die Werte der Karten festgelegt
function newArray() {
    let thisArray = cards.splice(0, cardpairs * 2);
    let form = document.querySelector("#form");
    form.style.display = "none";
    // shuffle Array
    let ctr = thisArray.length;
    while (ctr > 0) {
        //Zufällige Stelle im Array auswählen
        let index = Math.floor(Math.random() * ctr);
        // Die Variable eins runterzählen, die letzte Position des Arrays ist eins kleiner als die Länge, weil wir bei 0 anfangen zu zählen
        ctr--;
        // temporäre Variable für das letzte Element im Array
        let temp = thisArray[ctr];
        // Dem letzten Element die zufällig ausgesuchte Stelle geben
        thisArray[ctr] = thisArray[index];
        // Das Element von der zufälligen Stelle wird ans Ende des Arrays geschoben
        thisArray[index] = temp;
    }
    for (let index = 0; index < thisArray.length; index++) {
        let element = thisArray[index];
        createDeck(element);
    }
}
// hier werden die Karten erstellt
function createDeck(_value) {
    let card1 = document.createElement("div");
    // hier kriegt die Karte eine Klasse, damit sie verglichen werden können
    card1.classList.add("" + _value);
    // hier wird die eingestellte Kartengröße übernommen
    card1.classList.add("card");
    card1.style.width = cardsize + "px";
    card1.style.height = cardsize + "px";
    card1.style.lineHeight = cardsize + "px";
    // hier wird die eingestellte Hintergrundfarbe übernommen
    let carddeck = document.getElementById("carddeck");
    carddeck.style.backgroundColor = backgroundcolor;
    carddeck.style.flex(flexwrap);
    // hier wird die eingestellte Kartenfarbe übernommen
    card1.style.backgroundColor = cardcolor;
    // hier wird die eingestellte Schriftfarbe übernommen
    card1.style.color = fontcolor;
    //hier wird die eingestellte Schriftart übernommen
    card1.style.fontFamily = font; // bei mir nicht, bei Alida schon
    // hier wird noch die Sidebar angepasst
    let sidebar = document.getElementById("infos");
    sidebar.style.backgroundColor = cardcolor;
    sidebar.style.color = fontcolor;
    // hier werden die Karten auf das Spielfeld geschickt
    let karten = document.querySelector("#Karten");
    karten.appendChild(card1);
    card1.addEventListener("click", turnAround);
}
// hier wird der Wert auf den Karten angezeigt
function turnAround(_event) {
    let eventTarget = _event.target;
    let wert = eventTarget.classList[0];
    globalArray.push(eventTarget);
    console.log(globalArray);
    if (globalArray.length == 1) {
        eventTarget.innerHTML = wert; //"dreht" die Karte "um"
    }
    else if (globalArray.length == 2) {
        eventTarget.innerHTML = wert;
        let wertCard1 = globalArray[0].classList[0];
        setTimeout(function () {
            if (wert == wertCard1) {
                globalArray[0].style.visibility = "hidden";
                globalArray[1].style.visibility = "hidden";
                globalArray = [];
            }
            else {
                globalArray[0].innerHTML = ""; //globalArray[0] ist meine erste Karte, eventTarget meine zweite!
                eventTarget.innerHTML = ""; //+Timeout
                globalArray = [];
            }
        }, 1000);
    }
    console.log(eventTarget.classList[0]);
}
// Timer
function timer() {
    for (let timerindex = 0; timerindex < thisArray.length; timerindex++) {
        let timer = array[timerindex];
    }
}
//# sourceMappingURL=memoryscript.js.map
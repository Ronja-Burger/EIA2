"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let spielstart = document.querySelector("#Startbutton");
    spielstart.addEventListener("click", outputs);
}
let cards = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N"];
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
    let thisArray = cards.splice(0, cardpairs * 2); //kann ich hier auch an Stelle von 0 eine Variable einfügen, die eine zufällige Zahl ist?
    let form = document.querySelector("#form");
    form.style.display = "none";
    for (let index = 0; index < thisArray.length; index++) {
        let element = thisArray[index];
        createDeck(element);
        //createDeck(element);
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
    carddeck.style.backgroundColor = backgroundcolor; // warum tut das nicht?
    // hier wird die eingestellte Kartenfarbe übernommen
    card1.style.backgroundColor = cardcolor; // tut auch nicht
    // hier wird die eingestellte Schriftfarbe übernommen
    card1.style.color = fontcolor; // tut auch nicht
    //hier wird die eingestellte Schriftart übernommen
    card1.style.fontFamily = font;
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
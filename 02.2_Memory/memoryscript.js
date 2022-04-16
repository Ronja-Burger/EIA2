"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let spielstart = document.querySelector("#Startbutton");
    spielstart.addEventListener("click", outputs);
}
let cards = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N"];
let globalArray = [];
let cardpairs;
let cardsize;
let backgroundcolor;
let cardcolor;
let fontcolor;
let font;
//let input: HTMLInputElement = <HTMLInputElement>document.querySelector("#input");
function outputs() {
    let formdata = new FormData(document.forms[0]);
    for (let entry of formdata.entries()) {
        switch (entry[0]) {
            case "cardpairs":
                cardpairs = Number(entry[1]);
                break;
            case "cardsize":
                cardsize = Number(entry[1]);
            default:
                break;
        }
        console.log(entry);
    }
    newArray();
}
function newArray() {
    let thisArray = cards.splice(0, cardpairs); //kann ich hier auch an Stelle von 0 eine Variable einfügen, die eine zufällige Zahl ist?
    let form = document.querySelector("#form");
    form.style.display = "none";
    for (let index = 0; index < thisArray.length; index++) {
        let element = thisArray[index];
        createDeck(element);
        createDeck(element);
    }
}
function createDeck(_value) {
    let card1 = document.createElement("div");
    card1.classList.add("" + _value);
    card1.classList.add("card");
    card1.style.width = cardsize + "px";
    card1.style.height = cardsize + "px";
    card1.style.lineHeight = cardsize + "px";
    let karten = document.querySelector("#Karten");
    karten.appendChild(card1);
    card1.addEventListener("click", turnAround);
}
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
    //card1.addEventListener("click", turnBack);
}
//function turnBack(): void { }
/*
function compare(): void {
    if (card1.classlist == card1.classlist) {
        display: none;
            else innerHTML.style: plane;
    }
}
}*/ 
//# sourceMappingURL=memoryscript.js.map
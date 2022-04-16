"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let cards = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N",];
    let globalArray = [];
    //console.log(cards);
    let input = document.querySelector("#input");
    let spielstart = document.querySelector("#Startbutton");
    //input.value splice
    spielstart.addEventListener("click", newArray); //funktioniert kurz, dann springt es zurück
    function newArray() {
        let thisArray = cards.splice(0, Number(input.value)); //kann ich hier auch an Stelle von 0 eine Variable einfügen, die eine zufällige Zahl ist?
        input.style.display = "none";
        for (let index = 0; index < thisArray.length; index++) {
            let element = thisArray[index];
            createDeck(element); //Deck soll nicht erstellt werden, bevor alle inputs ausgelesen wurden
            createDeck(element);
            console.log(thisArray);
            // push thisArray in globalArray
            //let compareArray = globalArray.push(thisArray[index]); //von was für einem Typ ist das denn?
            //console.log(compareArray); //wird nicht ausgegeben
        }
    }
    function createDeck(_value) {
        let card1 = document.createElement("div");
        card1.classList.add("" + _value);
        card1.classList.add("card");
        let karten = document.querySelector("#Karten");
        karten.appendChild(card1);
        card1.addEventListener("click", turnAround);
    }
    function turnAround(_event) {
        let eventTarget = _event.target;
        let wert = eventTarget.classList[0];
        eventTarget.innerHTML = wert; //und wie lasse ich den wieder verschwinden?
        console.log(eventTarget.classList[0]);
    }
}
/*
function compare(): void {
    if (card1.classlist == card1.classlist) {
        display: none;
            else innerHTML.style: plane;
    }
}
}*/ 
//# sourceMappingURL=memoryscript.js.map
"use strict";
window.addEventListener("load", hndLoad);
function hndLoad() {
    let cards = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N",];
    let globalArray = [];
    //console.log(cards);
    let input = document.querySelector("#input");
    //input.value splice
    input.addEventListener("change", newArray);
    function newArray() {
        let thisArray = cards.splice(0, Number(input.value));
        input.style.display = "none";
        for (let index = 0; index < thisArray.length; index++) {
            let element = thisArray[index];
            createDeck(element);
            createDeck(element);
        }
        console.log(thisArray);
        // push thisArray in globalArray
        //createDeck();
        //createDeck();
    }
    function createDeck(_value) {
        let card1 = document.createElement("div");
        card1.classList.add("" + _value);
        card1.classList.add("card");
        let karten = document.querySelector("#Karten");
        karten.appendChild(card1); //add EventListener
        card1.addEventListener("click", turnAround);
    }
    function turnAround(_event) {
        let eventTarget = _event.target;
        let wert = eventTarget.classList[0];
        eventTarget.innerHTML = wert;
        console.log(eventTarget.classList[0]);
    }
}
function compare() {
    if (div1.class == div2.class) {
        display: none;
        innerHTML.style;
        plane;
    }
}
//# sourceMappingURL=memoryscript.js.map
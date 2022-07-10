"use strict";
var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
    }
    // hide screen 1 and show screen 2
    function hideScreen1() {
        let screen1 = document.getElementById("Screen1");
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }
    // create fields
    function createFields() {
        //iterate through rows
        for (let index = 0; index < 7; index++) {
            document.querySelector("row" + index);
            let rows = document.getElementById("row" + index);
            //create 7 fields in a row 
            for (let index = 0; index < 9; index++) {
                let field = document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                let state = document.createElement("div");
                state.classList.add("pbar");
                field.appendChild(state);
            }
        }
        readData();
    }
    // Variables for formdata
    let priceVariation;
    let capital;
    // read formdata
    function readData() {
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "priceVariation":
                    priceVariation = Number(entry[1]);
                    break;
                case "capital":
                    capital = entry[1].toString();
            }
        }
        // show entry in div
        let capitalDiv = document.getElementById("capital");
        capitalDiv.innerHTML = capital;
        console.log(capital);
    }
    // EVENTLISTENER on vegetables
    let carrot = document.getElementById("carrot");
    let eggplant = document.getElementById("eggplant");
    let garlic = document.getElementById("garlic");
    let salad = document.getElementById("salad");
    let potato = document.getElementById("potato");
    carrot.addEventListener("click", buy);
    eggplant.addEventListener("click", buy);
    garlic.addEventListener("click", buy);
    salad.addEventListener("click", buy);
    potato.addEventListener("click", buy);
    // function to buy vegetables
    function buy() {
        // Nummer erhöhen
    }
})(garden || (garden = {}));
//# sourceMappingURL=gardeningMAIN.js.map
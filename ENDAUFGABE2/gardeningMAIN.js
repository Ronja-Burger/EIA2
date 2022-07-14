"use strict";
var garden;
(function (garden) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        let start = document.getElementById("start");
        start.addEventListener("click", hideScreen1);
        // EVENTLISTENER on vegetables in market
        let carrot = document.getElementById("carrot");
        let eggplant = document.getElementById("eggplant");
        let garlic = document.getElementById("garlic");
        let salad = document.getElementById("salad");
        let potato = document.getElementById("potato");
        let dung = document.getElementById("dung");
        let pesticide = document.getElementById("pesticide");
        // call functions to buy Products
        carrot.addEventListener("click", buyCarrot);
        eggplant.addEventListener("click", buyEggplant);
        garlic.addEventListener("click", buyGarlic);
        salad.addEventListener("click", buySalad);
        potato.addEventListener("click", buyPotato);
        dung.addEventListener("click", buyDung);
        pesticide.addEventListener("click", buyPesticide);
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
    // read formdata
    function readData() {
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries()) {
            "Startcapital";
            garden.capital = Number(entry[1]);
        }
    }
    // show entry in div
    let capitalDiv = document.getElementById("capital");
    capitalDiv.innerHTML = "TOTAL: " + garden.capital.toString();
})(garden || (garden = {}));
// Variables for the vegetables counters
let counterCarrot = 0;
let counterEggplant = 0;
let counterGarlic = 0;
let counterSalad = 0;
let counterPotato = 0;
let counterDung = 0;
let counterPesticide = 0;
// functions to buy vegetables doesn't work!!!!
function buyCarrot() {
    let carrotcounter = document.getElementById("carrotCounter");
    counterCarrot++;
    carrotcounter.innerHTML = counterCarrot.toString();
}
function buyEggplant() {
    let eggplantcounter = document.getElementById("eggplantCounter");
    counterEggplant++;
    eggplantcounter.innerHTML = counterEggplant.toString();
}
function buyGarlic() {
    let garliccounter = document.getElementById("garlicCounter");
    counterGarlic++;
    garliccounter.innerHTML = counterGarlic.toString();
}
function buySalad() {
    let saladcounter = document.getElementById("saladCounter");
    counterSalad++;
    saladcounter.innerHTML = counterSalad.toString();
}
function buyPotato() {
    let potatocounter = document.getElementById("potatoCounter");
    counterPotato++;
    potatocounter.innerHTML = counterPotato.toString();
}
function buyDung() {
    let dungcounter = document.getElementById("dungCounter");
    counterDung++;
    dungcounter.innerHTML = counterDung.toString();
}
function buyPesticide() {
    let pesticidecounter = document.getElementById("pesticideCounter");
    counterPesticide++;
    pesticidecounter.innerHTML = counterPesticide.toString();
}
//# sourceMappingURL=gardeningMAIN.js.map
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
    // read formdata
    function readData() {
        let formdata = new FormData(document.forms[0]);
        for (let entry of formdata.entries()) {
            switch (entry[0]) {
                case "priceVariation":
                    garden.priceVariation = Number(entry[1]);
                    console.log(garden.priceVariation); //funktioniert nicht?
                    break;
                case "Startcapital":
                    garden.capital = Number(entry[1]);
            }
        }
        // show entry in div
        let capitalDiv = document.getElementById("capital");
        capitalDiv.innerHTML = garden.capital.toString();
    }
    // EVENTLISTENER on vegetables in market
    let carrot = document.getElementById("carrot");
    let eggplant = document.getElementById("eggplant");
    let garlic = document.getElementById("garlic");
    let salad = document.getElementById("salad");
    let potato = document.getElementById("potato");
    // call functions to buy vegetables
    carrot.addEventListener("click", buyCarrot);
    eggplant.addEventListener("click", buyEggplant);
    garlic.addEventListener("click", buyGarlic);
    salad.addEventListener("click", buySalad);
    potato.addEventListener("click", buyPotato);
    // functions to buy vegetables
    function buyCarrot() {
        let counter = 0;
        let carrotcounter = document.getElementById("carrotCounter");
        carrotcounter.innerHTML = counter.toString();
        counter++;
    }
    /*     // Instanzierung - drag'n'drop?
        let startCapital: number = 0;
        let minPrice: number = 0;
        let maxPrice: number = 0;
    
        let seedlings: {[name: string]: object} = {};
        let cropProducts: {[name: string]: object} = {};
        let plants: {[name: string]: object} = {};
    
        seedlings.Salad = new Product("Salad", minPrice, maxPrice);
        cropProducts.Salad = new Product("Salad", minPrice, maxPrice);
        plants.Salad = new Salad();
        
        seedlings.Potato = new Product("Potato", minPrice, maxPrice);
        cropProducts.Potato = new Product("Potato", minPrice, maxPrice);
        plants.Potato = new Potato();
    
        seedlings.Carrot = new Product("Carrot", minPrice, maxPrice);
        cropProducts.Carrot = new Product("Carrot", minPrice, maxPrice);
        plants.Carrot = new Carrot();
    
        seedlings.Aubergine = new Product("Aubergine", minPrice, maxPrice);
        cropProducts.Aubergine = new Product("Aubergine", minPrice, maxPrice);
        plants.Aubergine = new Aubergine();
    
        seedlings.Garlic = new Product("Garlic", minPrice, maxPrice);
        cropProducts.Garlic = new Product("Garlic", minPrice, maxPrice);
        plants.Garlic = new Garlic();
    
    
        let dung: object = new Product("Dung", minPrice, maxPrice);
        let pesticide: object = new Product("Pesticide", minPrice, maxPrice);
        let market: object = new Market(startCapital, seedlings, cropProducts, dung, pesticide);
        let fields: object[] = [];
    
    
        setInterval(market.changePrices, 30000); */
})(garden || (garden = {}));
//# sourceMappingURL=gardeningMAIN.js.map
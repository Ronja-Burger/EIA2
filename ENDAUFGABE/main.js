"use strict";
var farm;
(function (farm) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        let start = document.getElementById("start");
        let form = document.querySelector("div#form"); //Test
        let slider = document.querySelector("input#capital"); //Test
        start.addEventListener("click", hideScreen1);
        //Test
        form.addEventListener("change", handleChange);
        // slider.addEventListener("input", displayCapital);
    }
    // Screen 1 verschwindet und wechselt zu Screen 2
    function hideScreen1() {
        let screen1 = document.getElementById("Screen1");
        let screen2 = document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }
    // Test
    function handleChange(_event) {
        // console.log(_event);
        // let variationPrice: HTMLInputElement = <HTMLInputElement>document.querySelector("input"); // Gibt nur ein Value aus, wie muss ich selektieren, dass beide Ausgegeben werden?
        // console.log(variationPrice.value);
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let capital = document.querySelector("div#Capital");
        capital.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        // console.log(formData);
        for (let entry of formData.entries()) {
            console.log(entry);
            let variation = document.querySelector("[value='" + entry[1] + "']");
            // console.log(variation);
            capital.innerHTML += variation.name + "value"; // Ausgabe vom Slider soll hier hin!!!
        }
    }
    //Test
    // function displayCapital(_event: Event): {
    //     let capital: HTMLDivElement = <HTMLDivElement>document.querySelector("Capital");
    //     let amount: string = (<HTMLInputElement>_event.target). value;
    //     Capital.value = parseFloat(capital);
    // }
    // Instanzierung - drag'n'drop?
    let startCapital = 0;
    let minPrice = 0;
    let maxPrice = 0;
    let seedlings = {};
    let cropProducts = {};
    let plants = {};
    seedlings.Salad = new farm.Product("Salad", minPrice, maxPrice);
    cropProducts.Salad = new farm.Product("Salad", minPrice, maxPrice);
    plants.Salad = new farm.Salad();
    seedlings.Potato = new farm.Product("Potato", minPrice, maxPrice);
    cropProducts.Potato = new farm.Product("Potato", minPrice, maxPrice);
    plants.Potato = new farm.Potato();
    seedlings.Carrot = new farm.Product("Carrot", minPrice, maxPrice);
    cropProducts.Carrot = new farm.Product("Carrot", minPrice, maxPrice);
    plants.Carrot = new farm.Carrot();
    seedlings.Aubergine = new farm.Product("Aubergine", minPrice, maxPrice);
    cropProducts.Aubergine = new farm.Product("Aubergine", minPrice, maxPrice);
    plants.Aubergine = new farm.Aubergine();
    seedlings.Garlic = new farm.Product("Garlic", minPrice, maxPrice);
    cropProducts.Garlic = new farm.Product("Garlic", minPrice, maxPrice);
    plants.Garlic = new farm.Garlic();
    let dung = new farm.Product("Dung", minPrice, maxPrice);
    let pesticide = new farm.Product("Pesticide", minPrice, maxPrice);
    let market = new farm.Market(startCapital, seedlings, cropProducts, dung, pesticide);
    let fields = [];
    setInterval(market.changePrices, 30000); //Syntax
    // create fields
    function createFields() {
        //iterate through rows
        for (let index = 0; index < 7; index++) {
            document.querySelector("row" + index);
            let rows = document.getElementById("row" + index);
            //create 7 fields in a row 
            for (let index = 0; index < 7; index++) {
                let field = document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                let stateAd = document.createElement("div");
                stateAd.classList.add("state");
                field.appendChild(stateAd);
            }
        }
    }
})(farm || (farm = {}));
//# sourceMappingURL=main.js.map
namespace farm {
    window.addEventListener("load", hndLoad);

    function hndLoad(_event: Event): void { //Test
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form"); //Test
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#capital"); //Test

        start.addEventListener("click", hideScreen1);
        //Test
        form.addEventListener("change", handleChange);
        // slider.addEventListener("input", displayCapital);
    }

    // Screen 1 verschwindet und wechselt zu Screen 2
    function hideScreen1(): void {
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1");
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }

    // Test
    function handleChange(_event: Event): void {
        // console.log(_event);
        // let variationPrice: HTMLInputElement = <HTMLInputElement>document.querySelector("input"); // Gibt nur ein Value aus, wie muss ich selektieren, dass beide Ausgegeben werden?
        // console.log(variationPrice.value);
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        let capital: HTMLDivElement = <HTMLDivElement>document.querySelector("div#Capital");
        capital.innerHTML = "";

        let formData: FormData = new FormData (document.forms[0]);
        // console.log(formData);
        for (let entry of formData.entries()){
            console.log(entry);
            let variation: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
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


    setInterval(market.changePrices, 30000); //Syntax

    // create fields
    function createFields(): void {

        //iterate through rows
        for (let index: number = 0; index < 7; index++) { 
            document.querySelector("row" + index);
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index);


            //create 7 fields in a row 
            for (let index: number = 0; index < 7; index++) {
                let field: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                let stateAd: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                stateAd.classList.add("state");
                field.appendChild(stateAd);
            }
        }
    }
}
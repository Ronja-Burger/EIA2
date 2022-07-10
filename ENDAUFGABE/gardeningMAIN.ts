namespace garden {
    window.addEventListener("load", hndLoad);
    function hndLoad(): void {
        let start: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        start.addEventListener("click", hideScreen1);
    }

    // hide screen 1 and show screen 2
    function hideScreen1(): void {
        let screen1: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen1");
        let screen2: HTMLDivElement = <HTMLDivElement>document.getElementById("Screen2");
        screen1.style.display = "none";
        screen2.style.display = "unset";
        createFields();
    }

    // create fields
    function createFields(): void {

        //iterate through rows
        for (let index: number = 0; index < 7; index++) {
            document.querySelector("row" + index);
            let rows: HTMLDivElement = <HTMLDivElement>document.getElementById("row" + index);


            //create 7 fields in a row 
            for (let index: number = 0; index < 9; index++) {
                let field: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                field.classList.add("field");
                rows.appendChild(field);
                let state: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                state.classList.add("pbar");
                field.appendChild(state);
            }
        }
        readData();
    }

    // Variables for formdata
    let priceVariation: number;
    let capital: number;

    // read formdata
    function readData(): void {
        let formdata: FormData = new FormData(document.forms[0]);

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
        let capitalDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("capital");
        capitalDiv.innerHTML = capital;
        console.log(capital);
    }





    // EVENTLISTENER on vegetables
    let carrot: HTMLImageElement = <HTMLImageElement>document.getElementById("carrot");
    let eggplant: HTMLImageElement = <HTMLImageElement>document.getElementById("eggplant");
    let garlic: HTMLImageElement = <HTMLImageElement>document.getElementById("garlic");
    let salad: HTMLImageElement = <HTMLImageElement>document.getElementById("salad");
    let potato: HTMLImageElement = <HTMLImageElement>document.getElementById("potato");

    carrot.addEventListener("click", buy);
    eggplant.addEventListener("click", buy);
    garlic.addEventListener("click", buy);
    salad.addEventListener("click", buy);
    potato.addEventListener("click", buy);

    // function to buy vegetables
    function buy(): void {
        // Nummer erhöhen
    }
} 
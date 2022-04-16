window.addEventListener("load", hndLoad);
function hndLoad(): void {
    let cards: string[] = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N",];
    let globalArray: string[] = [];
    //console.log(cards);
    let input: HTMLInputElement = <HTMLInputElement>document.querySelector("#input");
    let spielstart: HTMLInputElement = <HTMLInputElement>document.querySelector("#Startbutton");
    //input.value splice
    spielstart.addEventListener("change", newArray); //funktioniert nicht

    function newArray(): void {
        let thisArray: string[] = cards.splice(0, Number(input.value)); //kann ich hier auch an Stelle von 0 eine Variable einfügen, die eine zufällige Zahl ist?
        input.style.display = "none";
        for (let index: number = 0; index < thisArray.length; index++) {
            let element: string = thisArray[index];
            createDeck(element); //Deck soll nicht erstellt werden, bevor alle inputs ausgelesen wurden
            createDeck(element);
            console.log(thisArray);
            // push thisArray in globalArray
            let compareArray = globalArray.push(thisArray[index]); //von was für einem Typ ist das denn?
            console.log(compareArray); //wird nicht ausgegeben
        }
    }

    function createDeck(_value: string): void {
        let card1: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        card1.classList.add("" + _value);
        card1.classList.add("card");
        let karten: HTMLDivElement = <HTMLDivElement>document.querySelector("#Karten");
        karten.appendChild(card1);
        card1.addEventListener("click", turnAround);
    }

    function turnAround(_event: MouseEvent): void {
        let eventTarget: HTMLDivElement = <HTMLDivElement>_event.target;
        let wert: string = eventTarget.classList[0];
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
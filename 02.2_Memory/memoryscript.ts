window.addEventListener("load", hndLoad);
function hndLoad(): void {
    let cards: string[] = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "M", "X", "C", "V", "B", "N",];
    let globalArray: string[] = [];
    //console.log(cards);
    let input: HTMLInputElement = <HTMLInputElement>document.querySelector("#input");
    //input.value splice

    function newArray(): void {
        let thisArray: string[] = cards.splice(Number(input.value), 1);
        // push thisArray in globalArray
        createDeck();
        createDeck();
    }

    function createDeck(): void {
        let card1: HTMLDivElement = document.createElement("div");
        while input.value >= 0;
        div0.classList.add("class" + input.value);
        appendChild(body); //add EventListener
    }
    function turnAround(): void {
        innerhtml.style: display;
        push in global Array;
        if globalArray.length == 1 {
            compare;
        }
    }
    function compare(): void {
        if div1.class == div2.class {
            display: none;
            else innerHTML.style: plane;
        }
    }
}
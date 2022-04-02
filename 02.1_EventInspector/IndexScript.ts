window.addEventListener ("load", hndLoad);

let div0: HTMLDivElement;

function hndLoad (): void {
let div0: HTMLDivElement = <HTMLDivElement>document.querySelector(".div0");
let div1: HTMLDivElement = <HTMLDivElement>document.querySelector(".div1");

    // mouse move listener on document
document.addEventListener ("mousemove", setInfoBox);
    // click listener on document ...
document.addEventListener ("click", logInfo);
    // ... body ...
document.body.addEventListener ("click", logInfo);
    // ... div0 ...
div0.addEventListener ("click", logInfo);
    // ... and div1.
div1.addEventListener ("click", logInfo);
    // key-up Listener on document ...
document.addEventListener ("keyup", logInfo);
    // ... body ...
document.body.addEventListener ("keyup", logInfo);
    // ... div0 ...
div0.addEventListener ("keyup", logInfo);
    // ... and div1.
div1.addEventListener ("keyup", logInfo);
}

function setInfoBox (_event: MouseEvent): void {
    //diplay mouse position - clientX und clientY ist Position, span bekommt die Werte + offset
let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector(".span");
span.style.top = _event.clientY + 20 + "px";
span.style.left = _event.clientX + 20 + "px";
span.innerHTML = _event.target + "<p>";
//let info: HTMLParagraphElement = document.createElement("p");
//span.appendChild(info);
}

function logInfo (_event: Event): void {
    // in der Konsole ausgeben: Event Typ, Target, currentTarget, whole EventObject
    console.log(_event.type, _event.target, _event.currentTarget, _event);
}
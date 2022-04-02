"use strict";
window.addEventListener("load", hndLoad);
let div0;
function hndLoad() {
    let div0 = document.querySelector(".div0");
    let div1 = document.querySelector(".div1");
    // mouse move listener on document
    document.addEventListener("mousemove", setInfoBox);
    // click listener on document ...
    document.addEventListener("click", logInfo);
    // ... body ...
    document.body.addEventListener("click", logInfo);
    // ... div0 ...
    div0.addEventListener("click", logInfo);
    // ... and div1.
    div1.addEventListener("click", logInfo);
    // key-up Listener on document ...
    document.addEventListener("keyup", logInfo);
    // ... body ...
    document.body.addEventListener("keyup", logInfo);
    // ... div0 ...
    div0.addEventListener("keyup", logInfo);
    // ... and div1.
    div1.addEventListener("keyup", logInfo);
}
function setInfoBox(_event) {
    //diplay mouse position - clientX und clientY ist Position, span bekommt die Werte + offset
    let span = document.querySelector(".span");
    span.style.top = _event.clientY + 20 + "px";
    span.style.left = _event.clientX + 20 + "px";
}
function logInfo(_event) {
    // in der Konsole ausgeben: Event Typ, Target, currentTarget, whole EventObject
    console.log(_event.type, _event.target, _event.currentTarget, _event);
}
//# sourceMappingURL=IndexScript.js.map
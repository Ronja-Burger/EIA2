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
        for (let index = 0; index < 7; index++) { //iterate through rows
            for (let index = 0; index < 7; index++) { //create 7 fields in a row
                let field = document.createElement("div");
                document.querySelector("row" + index);
                let rows = document.getElementById("row" + index);
                rows.classList.add("field");
                rows.appendChild(field);
            }
        }
    }
})(garden || (garden = {}));
//# sourceMappingURL=gardeningMAIN.js.map
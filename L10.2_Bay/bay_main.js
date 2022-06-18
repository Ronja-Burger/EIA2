"use strict";
var Bay;
(function (Bay) {
    window.addEventListener("load", start);
    let imageData; //brauch ich in finction update nochmal
    let cloud;
    //Array vom Typ Superklasse
    function start(_event) {
        Bay.canvas = document.querySelector("canvas");
        Bay.crc2 = Bay.canvas.getContext("2d");
        Bay.canvas.width = screen.width;
        Bay.canvas.height = screen.height;
        drawSky();
        drawSea();
        drawBeach();
        // Objekte  
        let sun = new Bay.Sun();
        sun.draw();
        let rock = new Bay.Rock();
        rock.draw();
        let bush = new Bay.Bush();
        bush.draw();
        // Hintergrund speichern
        imageData = Bay.crc2.getImageData(0, 0, Bay.canvas.width, Bay.canvas.height);
        cloud = new Bay.Cloud();
        cloud.draw();
        let person = new Bay.Person();
        person.draw();
        let seagull = new Bay.Seagull();
        seagull.draw();
        setInterval(update, 1000 / 24);
    }
    function drawSky() {
        Bay.crc2.beginPath();
        Bay.crc2.fillStyle = "lightblue";
        Bay.crc2.fillRect(0, 0, Bay.canvas.width, Bay.canvas.height);
        Bay.crc2.stroke();
        Bay.crc2.closePath();
    }
    function drawSea() {
        Bay.crc2.beginPath();
        Bay.crc2.fillStyle = "rgb(83, 134, 139)";
        Bay.crc2.fillRect(0, Bay.canvas.height / 2, Bay.canvas.width, Bay.canvas.height);
        Bay.crc2.stroke();
        Bay.crc2.closePath();
    }
    function drawBeach() {
        Bay.crc2.beginPath();
        Bay.crc2.fillStyle = "rgb(205, 170, 125)";
        Bay.crc2.fillRect(0, 650, Bay.canvas.width, Bay.canvas.height);
        Bay.crc2.stroke();
        Bay.crc2.closePath();
    }
    // Animationen
    for (let moveable of Moveables) {
        moveable.move();
        moveable.draw();
    }
    function update() {
        Bay.crc2.putImageData(imageData, 0, 0);
        cloud.move();
        cloud.draw();
    }
})(Bay || (Bay = {}));
//# sourceMappingURL=bay_main.js.map
"use strict";
var Bay2;
(function (Bay2) {
    window.addEventListener("load", start);
    let imageData; //brauch ich in function update nochmal
    let sun;
    let rock;
    let bush;
    let cloud;
    let person;
    let seagull;
    let moveables = [];
    function start(_event) {
        Bay2.canvas = document.querySelector("canvas");
        Bay2.crc2 = Bay2.canvas.getContext("2d");
        Bay2.canvas.width = screen.width;
        Bay2.canvas.height = screen.height;
        console.log(Bay2.canvas.width, Bay2.canvas.height);
        drawSky();
        drawSea();
        drawBeach();
        // Objekte  
        sun = new Bay2.Sun();
        sun.draw();
        for (let index = 8; index > 0; index--) {
            rock = new Bay2.Rock();
            rock.draw();
        }
        for (let index = 10; index > 0; index--) {
            bush = new Bay2.Bush();
            bush.draw();
        }
        // Hintergrund speichern
        imageData = Bay2.crc2.getImageData(0, 0, Bay2.canvas.width, Bay2.canvas.height);
        for (let index = 10; index > 0; index--) {
            cloud = new Bay2.Cloud();
            cloud.draw();
            moveables.push(cloud);
        }
        for (let index = 3; index > 0; index--) {
            person = new Bay2.Person();
            person.draw();
            moveables.push(person);
        }
        for (let index = 3; index > 0; index--) {
            seagull = new Bay2.Seagull();
            seagull.draw();
            moveables.push(seagull);
        }
        setInterval(update, 1000 / 24);
    }
    function drawSky() {
        Bay2.crc2.beginPath();
        Bay2.crc2.fillStyle = "lightblue";
        Bay2.crc2.fillRect(0, 0, Bay2.canvas.width, Bay2.canvas.height);
        Bay2.crc2.stroke();
        Bay2.crc2.closePath();
    }
    function drawSea() {
        Bay2.crc2.beginPath();
        Bay2.crc2.fillStyle = "rgb(83, 134, 139)";
        Bay2.crc2.fillRect(0, Bay2.canvas.height / 2, Bay2.canvas.width, Bay2.canvas.height);
        Bay2.crc2.stroke();
        Bay2.crc2.closePath();
    }
    function drawBeach() {
        Bay2.crc2.beginPath();
        Bay2.crc2.fillStyle = "rgb(205, 170, 125)";
        Bay2.crc2.fillRect(0, 650, Bay2.canvas.width, Bay2.canvas.height);
        Bay2.crc2.stroke();
        Bay2.crc2.closePath();
    }
    // Animation
    function update() {
        Bay2.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
    }
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=bay_main.js.map
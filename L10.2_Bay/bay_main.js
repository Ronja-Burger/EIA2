"use strict";
var Bay;
(function (Bay) {
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
        Bay.canvas = document.querySelector("canvas");
        Bay.crc2 = Bay.canvas.getContext("2d");
        Bay.canvas.width = screen.width;
        Bay.canvas.height = screen.height;
        console.log(Bay.canvas.width, Bay.canvas.height);
        drawSky();
        drawSea();
        drawBeach();
        // Objekte  
        sun = new Bay.Sun();
        sun.draw();
        for (let index = 8; index > 0; index--) {
            rock = new Bay.Rock();
            rock.draw();
        }
        for (let index = 10; index > 0; index--) {
            bush = new Bay.Bush();
            bush.draw();
        }
        // Hintergrund speichern
        imageData = Bay.crc2.getImageData(0, 0, Bay.canvas.width, Bay.canvas.height);
        for (let index = 10; index > 0; index--) {
            cloud = new Bay.Cloud();
            cloud.draw();
            moveables.push(cloud);
        }
        for (let index = 3; index > 0; index--) {
            person = new Bay.Person();
            person.draw();
            moveables.push(person);
        }
        for (let index = 3; index > 0; index--) {
            seagull = new Bay.Seagull();
            seagull.draw();
            moveables.push(seagull);
        }
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
    // Animation
    function update() {
        Bay.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
    }
})(Bay || (Bay = {}));
//# sourceMappingURL=bay_main.js.map
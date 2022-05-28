"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    function start(_event) {
        Canvas.canvas = document.querySelector("canvas");
        Canvas.crc2 = Canvas.canvas.getContext("2d");
        Canvas.canvas.width = screen.width;
        Canvas.canvas.height = screen.height;
        drawSky();
        drawSea();
        drawBeach();
        drawSeagull();
        drawSeagull();
        drawSeagull();
    }
    function drawSky() {
        Canvas.crc2.beginPath();
        Canvas.crc2.fillStyle = "lightblue";
        Canvas.crc2.fillRect(0, 0, Canvas.canvas.width, Canvas.canvas.height);
        Canvas.crc2.stroke();
        Canvas.crc2.closePath();
    }
    function drawSea() {
        Canvas.crc2.beginPath();
        Canvas.crc2.fillStyle = "rgb(83, 134, 139)";
        Canvas.crc2.fillRect(0, Canvas.canvas.height / 2, Canvas.canvas.width, Canvas.canvas.height);
        Canvas.crc2.stroke();
        Canvas.crc2.closePath();
    }
    function drawBeach() {
        Canvas.crc2.beginPath();
        Canvas.crc2.fillStyle = "rgb(205, 170, 125)";
        Canvas.crc2.fillRect(0, 650, Canvas.canvas.width, Canvas.canvas.height);
        Canvas.crc2.stroke();
        Canvas.crc2.closePath();
        //console.log(canvas.height);
    }
    function drawSeagull() {
        Canvas.crc2.save();
        Canvas.crc2.translate(randomNumberSeagullx(), randomNumberSeagully());
        Canvas.crc2.beginPath();
        Canvas.crc2.arc(100 + 0, 100, 8, 3, 0);
        Canvas.crc2.arc(100 + 16, 100, 8, 3, 0);
        Canvas.crc2.stroke();
    }
    // Zufallszahlen für die Position der Möven
    function randomNumberSeagullx() {
        let number = Math.floor(Math.random() * 800);
        return number;
    }
    function randomNumberSeagully() {
        let number = Math.floor(Math.random() * 100);
        return number;
    }
})(Canvas || (Canvas = {}));
//function drawShip(): void {}
//function drawPersonsAtSea(): void {}
//# sourceMappingURL=bay.js.map
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
        drawSun();
        for (let index = 0; index < 10; index++) {
            drawBushes();
        }
        for (let index = 0; index < 5; index++) {
            drawPersonAtBeach();
        }
        //drawPalmLeaf();
        drawPersonAtBeach();
        drawSeagull();
        drawSeagull();
        drawSeagull();
        //console.log(crc2.canvas.height, crc2.canvas.width);
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
    // Sonne
    function drawSun() {
        let r = 150;
        let gradient = Canvas.crc2.createRadialGradient(0, 0, 60, 0, 0, r);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        Canvas.crc2.save();
        Canvas.crc2.translate(randomNumberSun(), randomNumberSun());
        Canvas.crc2.fillStyle = gradient;
        Canvas.crc2.arc(0, 0, r, 0, 2 * Math.PI);
        Canvas.crc2.fill();
        Canvas.crc2.restore();
    }
    // Zufallszahlen für die Position der Sonne
    function randomNumberSun() {
        let number = Math.floor(Math.random() * 150 + 150);
        return number;
    }
    console.log(randomNumberSun());
    // Büsche
    function drawBushes() {
        let r = 30;
        let gradient = Canvas.crc2.createRadialGradient(0, 0, 1, 0, 0, r);
        gradient.addColorStop(0, "rgba(0, 100, 0, 1)");
        gradient.addColorStop(1, "rgba(0, 100, 0, 0)");
        Canvas.crc2.save();
        Canvas.crc2.translate(randomNumberBushX(), randomNumberBushY());
        Canvas.crc2.moveTo(randomNumberBushX(), randomNumberBushY());
        Canvas.crc2.fillStyle = gradient;
        Canvas.crc2.arc(0, 0, r, 0, 2 * Math.PI);
        Canvas.crc2.fill();
        Canvas.crc2.restore();
    }
    // Zufallszahlen für die Position der Büsche
    function randomNumberBushX() {
        let number = Math.floor(Math.random() * 300);
        return number;
    }
    function randomNumberBushY() {
        let number = Math.floor(Math.random() * 150 + 700);
        return number;
    }
    function drawPersonAtBeach() {
        let x = 30;
        let y = 400;
        Canvas.crc2.save();
        Canvas.crc2.translate(randomNumberPersonX(), randomNumberPersonY());
        Canvas.crc2.beginPath();
        //Kopf
        Canvas.crc2.arc(x + 5, y - 60, 11, 0, 2 * Math.PI);
        Canvas.crc2.fillStyle = "rgb(0, 0, 0)";
        //Beine
        Canvas.crc2.moveTo(x - 10, y + 0);
        Canvas.crc2.lineTo(x + 5, y - 20);
        Canvas.crc2.lineTo(x + 20, y + 0);
        //Körper
        Canvas.crc2.moveTo(x + 5, y - 20);
        Canvas.crc2.lineTo(x + 5, y - 50);
        //Arm links
        Canvas.crc2.moveTo(x + 5, y - 45);
        Canvas.crc2.lineTo(x - 10, y - 30);
        //Arm rechts
        Canvas.crc2.moveTo(x + 5, y - 45);
        Canvas.crc2.lineTo(x + 20, y - 30);
        //Auge links
        Canvas.crc2.moveTo(x + 4, y - 65);
        Canvas.crc2.lineTo(x + 4, y - 61);
        //Auge rechts
        Canvas.crc2.moveTo(x + 10, y - 65);
        Canvas.crc2.lineTo(x + 10, y - 61);
        //Mund
        Canvas.crc2.moveTo(x + 10, y - 56);
        Canvas.crc2.lineTo(x + 4, y - 56);
        Canvas.crc2.lineTo(x + 2, y - 58);
        Canvas.crc2.stroke();
        Canvas.crc2.restore();
    }
    // Zufallszahlen für die Position der Urlauber
    function randomNumberPersonX() {
        let number = Math.floor(Math.random() * 300 + 700);
        return number;
    }
    function randomNumberPersonY() {
        let number = Math.floor(Math.random() * 200 + 300);
        return number;
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
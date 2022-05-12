"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    let crc2;
    let canvas;
    function start(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        drawBackground();
        drawSea();
        drawBeach();
        drawSun();
        drawCloud();
    }
    function drawBackground() {
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        // kleine random Nummern noch
        crc2.stroke();
        crc2.closePath();
    }
    function drawSea() {
        crc2.beginPath();
        crc2.fillStyle = "blue";
        crc2.fillRect(0, canvas.height / 2, canvas.width, canvas.height);
        // kleine random Nummern noch
        crc2.stroke();
        crc2.closePath();
    }
    function drawBeach() {
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 650, canvas.width, canvas.height);
        // kleine random Nummern noch
        crc2.stroke();
        crc2.closePath();
        console.log(canvas.height);
    }
    function drawSun() {
        let r = 150;
        let gradient = crc2.createRadialGradient(0, 0, 30, 0, 0, r);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(100, 150); // kleine random Nummern noch
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud() {
        let r = 150;
        let gradient = crc2.createRadialGradient(0, 0, 30, 0, 0, r);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "white"); // Farbe nachschauen
        crc2.save();
        crc2.translate(500, 150); // kleine random Nummern noch
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bay.js.map
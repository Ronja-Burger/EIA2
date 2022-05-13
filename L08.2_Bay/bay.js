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
        drawSky();
        drawSea();
        drawBeach();
        drawSun();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
        drawCloud();
    }
    function drawSky() {
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }
    function drawSea() {
        crc2.beginPath();
        crc2.fillStyle = "rgb(83, 134, 139)";
        crc2.fillRect(0, canvas.height / 2, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }
    function drawBeach() {
        crc2.beginPath();
        crc2.fillStyle = "rgb(205, 170, 125)";
        crc2.fillRect(0, 650, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
        //console.log(canvas.height);
    }
    // Sonne
    function drawSun() {
        let r = 150;
        let gradient = crc2.createRadialGradient(0, 0, 30, 0, 0, r);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(randomNumberSunX(), randomNumberSunY());
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    // Zufallszahlen für die Position der Wolke
    function randomNumberSunX() {
        let number = Math.floor(Math.random() * 100 + 100);
        return number;
    }
    console.log(randomNumberSunX());
    function randomNumberSunY() {
        let number = Math.floor(Math.random() * 200);
        return number;
    }
    console.log(randomNumberSunY());
    // Wolke
    function drawCloud() {
        let r = 80;
        let gradient = crc2.createRadialGradient(0, 0, 50, 0, 0, r);
        gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        crc2.save();
        crc2.translate(randomNumberCloudX(), randomNumberCloudY());
        crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    // Zufallszahlen für die Position der Wolke
    function randomNumberCloudX() {
        let number = Math.floor(Math.random() * 300 + 800);
        return number;
    }
    console.log(randomNumberCloudX());
    function randomNumberCloudY() {
        let number = Math.floor(Math.random() * 200);
        return number;
    }
    console.log(randomNumberCloudY());
    function drawRocks() {
        crc2.beginPath;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bay.js.map
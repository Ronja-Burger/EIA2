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
        drawBushes();
        drawClouds();
        drawPersons();
        drawRocks();
        drawSeagulls();
        drawSun();
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
    }
    // Objekte       
    let bush = new Canvas.Bush();
    function drawBushes() {
        bush.draw();
    }
    let cloud = new Canvas.Cloud();
    function drawClouds() {
        cloud.draw();
    }
    let person = new Canvas.Person();
    function drawPersons() {
        person.draw();
    }
    let rock = new Canvas.Rock();
    function drawRocks() {
        rock.draw();
    }
    let seagull = new Canvas.Seagull();
    function drawSeagulls() {
        seagull.draw();
    }
    let sun = new Canvas.Sun();
    function drawSun() {
        sun.draw();
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bay_main.js.map
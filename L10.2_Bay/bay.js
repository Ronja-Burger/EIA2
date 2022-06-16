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
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bay.js.map
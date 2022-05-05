"use strict";
var Canvas;
(function (Canvas) {
    window.addEventListener("load", start);
    let crc2;
    function start(_event) {
        crc2 = document.querySelector("canvas")?.getContext("2d");
        triangle();
        circle();
        square();
    }
    function triangle() {
        crc2.beginPath();
        crc2.strokeStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")";
        crc2.moveTo(randomNumber(), 20);
        crc2.lineTo(randomNumber() + 40, 50);
        crc2.lineTo(randomNumber() - 10, 50);
        crc2.closePath();
        crc2.stroke();
    }
    function circle() {
        crc2.beginPath();
        crc2.strokeStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")";
        let path = new Path2D();
        path.arc(randomNumber(), randomNumber(), randomNumber(), 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke(path);
    }
    function square() {
        crc2.beginPath();
        crc2.fillStyle = "rgb (" + randomNumberRGB() + "," + randomNumberRGB() + "," + randomNumberRGB() + ")";
        crc2.fillRect(randomNumber(), randomNumber(), randomNumber(), randomNumber());
        crc2.closePath();
        crc2.stroke();
    }
    function randomNumber() {
        let number = Math.floor(Math.random() * 200);
        return number;
    }
    function randomNumberRGB() {
        let RGBnumber = Math.floor(Math.random() * 256);
        return RGBnumber;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map
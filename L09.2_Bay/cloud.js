"use strict";
var Canvas;
(function (Canvas) {
    class Cloud {
        translate;
        fillstyle;
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(randomNumberCloudX(), randomNumberCloudY());
            Canvas.crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
            Canvas.crc2.fillStyle = gradient;
            Canvas.crc2.arc(0, 0, r, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
    }
    Canvas.Cloud = Cloud;
})(Canvas || (Canvas = {}));
let r = 80;
let gradient = crc2.createRadialGradient(0, 0, 10, 0, 0, r);
gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
// Zufallszahlen für die Position der Wolke
function randomNumberCloudX() {
    let number = Math.floor(Math.random() * 800 + 600);
    return number;
}
function randomNumberCloudY() {
    let number = Math.floor(Math.random() * 300);
    return number;
}
//# sourceMappingURL=cloud.js.map
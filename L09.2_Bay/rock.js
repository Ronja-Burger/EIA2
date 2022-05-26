"use strict";
var Canvas;
(function (Canvas) {
    class Rock {
        translate; //crc2.translate(randomNumberRockX(), randomNumberRockY());
        fillstyle; //crc2.fillStyle = "rgb(99, 99, 99)";
        constructor(_translate, _fillstyle) {
            this.translate = _translate;
            this.fillstyle = _fillstyle;
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.beginPath();
            Canvas.crc2.moveTo(0, 650);
            Canvas.crc2.lineTo(30, 610);
            Canvas.crc2.lineTo(50, 600);
            Canvas.crc2.lineTo(70, 610);
            Canvas.crc2.lineTo(80, 630);
            Canvas.crc2.lineTo(100, 650);
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.restore();
        }
    }
    Canvas.Rock = Rock;
})(Canvas || (Canvas = {}));
// Zufallszahlen für die Position der Felsen
function randomNumberRockX() {
    let number = Math.floor(Math.random() * 450 + 1000);
    return number;
}
function randomNumberRockY() {
    let number = Math.floor(Math.random() * 200);
    return number;
}
//# sourceMappingURL=rock.js.map
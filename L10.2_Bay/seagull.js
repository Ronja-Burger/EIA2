"use strict";
var Canvas;
(function (Canvas) {
    class Seagull {
        randomNumberX;
        randomNumberY;
        constructor() {
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
        // Zufallszahlen für die Position der Möwen
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 100);
            return this.randomNumberY;
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.beginPath();
            Canvas.crc2.arc(100 + 0, 100, 8, 3, 0);
            Canvas.crc2.arc(100 + 16, 100, 8, 3, 0);
            Canvas.crc2.stroke();
        }
    }
    Canvas.Seagull = Seagull;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=seagull.js.map
"use strict";
var Canvas;
(function (Canvas) {
    class Bush {
        gradient = Canvas.crc2.createRadialGradient(0, 0, 1, 0, 0, 30);
        randomNumberX;
        randomNumberY;
        constructor() {
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
        // Zufallszahlen für die Position der Büsche
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 300);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 150 + 700);
            return this.randomNumberY;
        }
        addgradient() {
            this.gradient.addColorStop(0, "rgba(0, 100, 0, 1)");
            this.gradient.addColorStop(1, "rgba(0, 100, 0, 0)");
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.fillStyle = this.gradient;
            Canvas.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
    }
    Canvas.Bush = Bush;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=bush.js.map
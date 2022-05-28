"use strict";
var Canvas;
(function (Canvas) {
    class Cloud {
        gradient = Canvas.crc2.createRadialGradient(0, 0, 10, 0, 0, 80);
        randomNumberX;
        randomNumberY;
        constructor() {
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
        // Zufallszahlen für die Position der Wolke
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800 + 600);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 300);
            return this.randomNumberY;
        }
        addgradient() {
            this.gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            this.gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.fillStyle = this.gradient;
            Canvas.crc2.arc(0, 0, 80, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
    }
    Canvas.Cloud = Cloud;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=cloud.js.map
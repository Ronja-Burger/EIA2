"use strict";
var Canvas;
(function (Canvas) {
    class Sun {
        gradient = Canvas.crc2.createRadialGradient(0, 0, 60, 0, 0, 150);
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
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.fillStyle = this.gradient;
            Canvas.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
    }
    Canvas.Sun = Sun;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=sun.js.map
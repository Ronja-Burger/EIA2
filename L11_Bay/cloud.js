"use strict";
var Bay2;
(function (Bay2) {
    class Cloud extends Bay2.Movable {
        gradient = Bay2.crc2.createRadialGradient(0, 0, 10, 0, 0, 80);
        constructor() {
            super();
            this.addgradient();
            //console.log(this.randomNumberX, this.randomNumberY, canvas.width);
        }
        // Zufallszahlen für die Position der Wolke
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 200);
            return this.randomNumberY;
        }
        addgradient() {
            this.gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            this.gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        }
        draw() {
            Bay2.crc2.save();
            Bay2.crc2.translate(this.randomNumberX, this.randomNumberY);
            //crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Bay2.crc2.fillStyle = this.gradient;
            Bay2.crc2.arc(0, 0, 80, 0, 2 * Math.PI);
            Bay2.crc2.fill();
            Bay2.crc2.restore();
        }
    }
    Bay2.Cloud = Cloud;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=cloud.js.map
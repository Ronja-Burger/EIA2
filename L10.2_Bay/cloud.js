"use strict";
var Bay;
(function (Bay) {
    class Cloud extends Bay.Movable {
        gradient = Bay.crc2.createRadialGradient(0, 0, 10, 0, 0, 80);
        constructor() {
            this.addgradient();
            //console.log(this.randomNumberX, this.randomNumberY, canvas.width);
        }
        // Zufallszahlen für die Position der Wolke
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800);
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
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumberX, this.randomNumberY);
            //crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Bay.crc2.fillStyle = this.gradient;
            Bay.crc2.arc(0, 0, 80, 0, 2 * Math.PI);
            Bay.crc2.fill();
            Bay.crc2.restore();
        }
    }
    Bay.Cloud = Cloud;
})(Bay || (Bay = {}));
//# sourceMappingURL=cloud.js.map
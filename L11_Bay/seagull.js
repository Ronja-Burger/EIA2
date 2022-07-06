"use strict";
var Bay2;
(function (Bay2) {
    class Seagull extends Bay2.Movable {
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
            Bay2.crc2.save();
            Bay2.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay2.crc2.beginPath();
            Bay2.crc2.arc(100 + 0, 100, 8, 3, 0);
            Bay2.crc2.arc(100 + 16, 100, 8, 3, 0);
            Bay2.crc2.strokeStyle = "#000000";
            Bay2.crc2.stroke();
            Bay2.crc2.restore();
        }
    }
    Bay2.Seagull = Seagull;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=seagull.js.map
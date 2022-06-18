"use strict";
var Bay;
(function (Bay) {
    class Seagull extends Bay.Movable {
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
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay.crc2.beginPath();
            Bay.crc2.arc(100 + 0, 100, 8, 3, 0);
            Bay.crc2.arc(100 + 16, 100, 8, 3, 0);
            Bay.crc2.stroke();
        }
    }
    Bay.Seagull = Seagull;
})(Bay || (Bay = {}));
//# sourceMappingURL=seagull.js.map
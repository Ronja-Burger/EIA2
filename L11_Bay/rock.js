"use strict";
var Bay2;
(function (Bay2) {
    class Rock extends Bay2.Numbers {
        // Zufallszahlen für die Position der Felsen
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800 + 600);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 300);
            return this.randomNumberY;
        }
        draw() {
            Bay2.crc2.save();
            Bay2.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay2.crc2.beginPath();
            Bay2.crc2.moveTo(0, 650);
            Bay2.crc2.lineTo(30, 610);
            Bay2.crc2.lineTo(50, 600);
            Bay2.crc2.lineTo(70, 610);
            Bay2.crc2.lineTo(80, 630);
            Bay2.crc2.lineTo(100, 650);
            Bay2.crc2.fillStyle = "gray";
            Bay2.crc2.closePath();
            Bay2.crc2.restore();
        }
    }
    Bay2.Rock = Rock;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=rock.js.map
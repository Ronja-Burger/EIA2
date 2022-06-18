"use strict";
var Bay;
(function (Bay) {
    class Rock extends Bay.Numbers {
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
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay.crc2.beginPath();
            Bay.crc2.moveTo(0, 650);
            Bay.crc2.lineTo(30, 610);
            Bay.crc2.lineTo(50, 600);
            Bay.crc2.lineTo(70, 610);
            Bay.crc2.lineTo(80, 630);
            Bay.crc2.lineTo(100, 650);
            Bay.crc2.fillStyle = "gray";
            Bay.crc2.closePath();
            Bay.crc2.restore();
        }
    }
    Bay.Rock = Rock;
})(Bay || (Bay = {}));
//# sourceMappingURL=rock.js.map
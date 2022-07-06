"use strict";
var Bay2;
(function (Bay2) {
    class Sun extends Bay2.Motives {
        gradient = Bay2.crc2.createRadialGradient(0, 0, 60, 0, 0, 150);
        randomNumber;
        constructor() {
            super();
            this.createRandomNumber();
            this.addgradient();
        }
        // Zufallszahl für die Position der Sonne
        createRandomNumber() {
            this.randomNumber = Math.floor(Math.random() * 150 + 150);
            return this.randomNumber;
        }
        addgradient() {
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }
        draw() {
            Bay2.crc2.save();
            Bay2.crc2.translate(this.randomNumber, this.randomNumber);
            Bay2.crc2.fillStyle = this.gradient;
            Bay2.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            Bay2.crc2.fill();
            Bay2.crc2.restore();
        }
    }
    Bay2.Sun = Sun;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=sun.js.map
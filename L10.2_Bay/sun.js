"use strict";
var Bay;
(function (Bay) {
    class Sun extends Bay.Motives {
        gradient = Bay.crc2.createRadialGradient(0, 0, 60, 0, 0, 150);
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
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumber, this.randomNumber);
            Bay.crc2.fillStyle = this.gradient;
            Bay.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            Bay.crc2.fill();
            Bay.crc2.restore();
        }
    }
    Bay.Sun = Sun;
})(Bay || (Bay = {}));
//# sourceMappingURL=sun.js.map
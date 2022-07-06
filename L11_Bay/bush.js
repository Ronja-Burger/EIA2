"use strict";
var Bay2;
(function (Bay2) {
    class Bush extends Bay2.Numbers {
        gradient = Bay2.crc2.createRadialGradient(0, 0, 1, 0, 0, 30);
        constructor() {
            super();
            this.addgradient();
        }
        addgradient() {
            this.gradient.addColorStop(0, "rgba(0, 100, 0, 1)");
            this.gradient.addColorStop(1, "rgba(0, 100, 0, 0)");
        }
        draw() {
            Bay2.crc2.save();
            Bay2.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay2.crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Bay2.crc2.fillStyle = this.gradient;
            Bay2.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Bay2.crc2.fill();
            Bay2.crc2.restore();
        }
    }
    Bay2.Bush = Bush;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=bush.js.map
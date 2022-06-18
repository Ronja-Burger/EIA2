"use strict";
var Bay;
(function (Bay) {
    class Bush extends Bay.Numbers {
        gradient = Bay.crc2.createRadialGradient(0, 0, 1, 0, 0, 30);
        constructor() {
            super();
            this.addgradient();
        }
        addgradient() {
            this.gradient.addColorStop(0, "rgba(0, 100, 0, 1)");
            this.gradient.addColorStop(1, "rgba(0, 100, 0, 0)");
        }
        draw() {
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay.crc2.moveTo(this.randomNumberX, this.randomNumberY);
            Bay.crc2.fillStyle = this.gradient;
            Bay.crc2.arc(0, 0, 30, 0, 2 * Math.PI);
            Bay.crc2.fill();
            Bay.crc2.restore();
        }
    }
    Bay.Bush = Bush;
})(Bay || (Bay = {}));
//# sourceMappingURL=bush.js.map
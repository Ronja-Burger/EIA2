"use strict";
var Canvas;
(function (Canvas) {
    class Sun {
        r = 150;
        gradient = Canvas.crc2.createRadialGradient(0, 0, 60, 0, 0, r);
        addgradient() {
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(randomNumberSun(), randomNumberSun());
            Canvas.crc2.fillStyle = this.gradient;
            Canvas.crc2.arc(0, 0, r, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
    }
    Canvas.Sun = Sun;
    // Zufallszahlen für die Position der Sonne
    function randomNumberSun() {
        let number = Math.floor(Math.random() * 150 + 150);
        return number;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=sun.js.map
"use strict";
var Canvas;
(function (Canvas) {
    class Cloud {
        translate;
        fillstyle;
        gradient; //let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 10, 0, 0, r);
        randomNumberX;
        randomNumberY;
        // Zufallszahlen für die Position der Wolke
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 800 + 600);
            return randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 300);
            return randomNumberY;
        }
        draw(_r) {
            Canvas.crc2.save();
            Canvas.crc2.translate(randomNumberCloudX(), randomNumberCloudY());
            Canvas.crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
            Canvas.crc2.fillStyle = this.gradient;
            Canvas.crc2.arc(0, 0, r, 0, 2 * Math.PI);
            Canvas.crc2.fill();
            Canvas.crc2.restore();
        }
        addgradient() {
            this.gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            this.gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        }
    }
    Canvas.Cloud = Cloud;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=cloud.js.map
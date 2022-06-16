"use strict";
var Canvas;
(function (Canvas) {
    class Rock {
        randomNumberX;
        randomNumberY;
        constructor() {
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
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
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.beginPath();
            Canvas.crc2.moveTo(0, 650);
            Canvas.crc2.lineTo(30, 610);
            Canvas.crc2.lineTo(50, 600);
            Canvas.crc2.lineTo(70, 610);
            Canvas.crc2.lineTo(80, 630);
            Canvas.crc2.lineTo(100, 650);
            Canvas.crc2.fill();
            Canvas.crc2.closePath();
            Canvas.crc2.restore();
        }
    }
    Canvas.Rock = Rock;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=rock.js.map
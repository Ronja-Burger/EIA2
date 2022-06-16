"use strict";
var Canvas;
(function (Canvas) {
    class Person {
        x = 30;
        y = 400;
        randomNumberX;
        randomNumberY;
        constructor() {
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
        // Zufallszahlen für die Position der Personen
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 300 + 700);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 200 + 300);
            return this.randomNumberY;
        }
        draw() {
            Canvas.crc2.save();
            Canvas.crc2.translate(this.randomNumberX, this.randomNumberY);
            Canvas.crc2.beginPath();
            //Kopf
            Canvas.crc2.arc(this.x + 5, this.y - 60, 11, 0, 2 * Math.PI);
            Canvas.crc2.fillStyle = "rgb(0, 0, 0)";
            //Beine
            Canvas.crc2.moveTo(this.x - 10, this.y + 0);
            Canvas.crc2.lineTo(this.x + 5, this.y - 20);
            Canvas.crc2.lineTo(this.x + 20, this.y + 0);
            //Körper
            Canvas.crc2.moveTo(this.x + 5, this.y - 20);
            Canvas.crc2.lineTo(this.x + 5, this.y - 50);
            //Arm links
            Canvas.crc2.moveTo(this.x + 5, this.y - 45);
            Canvas.crc2.lineTo(this.x - 10, this.y - 30);
            //Arm rechts
            Canvas.crc2.moveTo(this.x + 5, this.y - 45);
            Canvas.crc2.lineTo(this.x + 20, this.y - 30);
            //Auge links
            Canvas.crc2.moveTo(this.x + 4, this.y - 65);
            Canvas.crc2.lineTo(this.x + 4, this.y - 61);
            //Auge rechts
            Canvas.crc2.moveTo(this.x + 10, this.y - 65);
            Canvas.crc2.lineTo(this.x + 10, this.y - 61);
            //Mund
            Canvas.crc2.moveTo(this.x + 10, this.y - 56);
            Canvas.crc2.lineTo(this.x + 4, this.y - 56);
            Canvas.crc2.lineTo(this.x + 2, this.y - 58);
            Canvas.crc2.stroke();
            Canvas.crc2.restore();
        }
    }
    Canvas.Person = Person;
})(Canvas || (Canvas = {}));
//# sourceMappingURL=person.js.map
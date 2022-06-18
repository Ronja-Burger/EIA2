"use strict";
var Bay;
(function (Bay) {
    class Person extends Bay.Movable {
        x = 30;
        y = 400;
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
            Bay.crc2.save();
            Bay.crc2.translate(this.randomNumberX, this.randomNumberY);
            Bay.crc2.beginPath();
            //Kopf
            Bay.crc2.arc(this.x + 5, this.y - 60, 11, 0, 2 * Math.PI);
            Bay.crc2.fillStyle = "rgb(0, 0, 0)";
            //Beine
            Bay.crc2.moveTo(this.x - 10, this.y + 0);
            Bay.crc2.lineTo(this.x + 5, this.y - 20);
            Bay.crc2.lineTo(this.x + 20, this.y + 0);
            //Körper
            Bay.crc2.moveTo(this.x + 5, this.y - 20);
            Bay.crc2.lineTo(this.x + 5, this.y - 50);
            //Arm links
            Bay.crc2.moveTo(this.x + 5, this.y - 45);
            Bay.crc2.lineTo(this.x - 10, this.y - 30);
            //Arm rechts
            Bay.crc2.moveTo(this.x + 5, this.y - 45);
            Bay.crc2.lineTo(this.x + 20, this.y - 30);
            //Auge links
            Bay.crc2.moveTo(this.x + 4, this.y - 65);
            Bay.crc2.lineTo(this.x + 4, this.y - 61);
            //Auge rechts
            Bay.crc2.moveTo(this.x + 10, this.y - 65);
            Bay.crc2.lineTo(this.x + 10, this.y - 61);
            //Mund
            Bay.crc2.moveTo(this.x + 10, this.y - 56);
            Bay.crc2.lineTo(this.x + 4, this.y - 56);
            Bay.crc2.lineTo(this.x + 2, this.y - 58);
            Bay.crc2.strokeStyle = "#000000";
            Bay.crc2.stroke();
            Bay.crc2.restore();
        }
    }
    Bay.Person = Person;
})(Bay || (Bay = {}));
//# sourceMappingURL=person.js.map
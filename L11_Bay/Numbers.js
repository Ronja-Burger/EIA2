"use strict";
var Bay2;
(function (Bay2) {
    class Numbers extends Bay2.Motives {
        randomNumberX;
        randomNumberY;
        constructor() {
            super();
            this.createRandomNumberX();
            this.createRandomNumberY();
        }
        // Zufallszahlen für die Positionen - geht eigentlich nicht, alles braucht unterschiedliche Zahlen?!
        createRandomNumberX() {
            this.randomNumberX = Math.floor(Math.random() * 300);
            return this.randomNumberX;
        }
        createRandomNumberY() {
            this.randomNumberY = Math.floor(Math.random() * 150 + 700);
            return this.randomNumberY;
        }
    }
    Bay2.Numbers = Numbers;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=Numbers.js.map
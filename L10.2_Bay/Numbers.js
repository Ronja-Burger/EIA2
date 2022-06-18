"use strict";
var Bay;
(function (Bay) {
    class Numbers extends Bay.Motives {
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
    Bay.Numbers = Numbers;
})(Bay || (Bay = {}));
//# sourceMappingURL=Numbers.js.map
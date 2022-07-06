namespace Bay2 {
    export abstract class Numbers extends Motives {
        randomNumberX: number;
        randomNumberY: number;

        constructor() {
            super();
            this.createRandomNumberX(); 
            this.createRandomNumberY();
        }

        // Zufallszahlen für die Positionen - geht eigentlich nicht, alles braucht unterschiedliche Zahlen?!
        createRandomNumberX(): number {
            this.randomNumberX = Math.floor(Math.random() * 300);
            return this.randomNumberX;
        }
        createRandomNumberY(): number {
            this.randomNumberY = Math.floor(Math.random() * 150 + 700);
            return this.randomNumberY;
        }

    }
}
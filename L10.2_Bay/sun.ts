namespace Bay {
    export class Sun extends Object {
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 60, 0, 0, 150);
        randomNumber: number;

        constructor() {
            this.createRandomNumber();
            this.addgradient();
        }

        // Zufallszahl für die Position der Sonne
        createRandomNumber(): number {
            this.randomNumber = Math.floor(Math.random() * 150 + 150);
            return this.randomNumber;
        }


        addgradient(): void {
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.randomNumber, this.randomNumber);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
}
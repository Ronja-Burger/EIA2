namespace Bay2 {
    export class Cloud extends Movable {
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 10, 0, 0, 80);

        constructor() {
            super();
            this.addgradient();
            //console.log(this.randomNumberX, this.randomNumberY, canvas.width);
        }

        // Zufallszahlen für die Position der Wolke
        createRandomNumberX(): number {
            this.randomNumberX = Math.floor(Math.random() * 800);
            return this.randomNumberX;
        }
        createRandomNumberY(): number {
            this.randomNumberY = Math.floor(Math.random() * 200);
            return this.randomNumberY;
        }

        addgradient(): void {
            this.gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
            this.gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.randomNumberX, this.randomNumberY);
            //crc2.moveTo(this.randomNumberX, this.randomNumberY);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, 80, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        }
    }
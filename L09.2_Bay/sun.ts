namespace Canvas {
    export class Sun {
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 60, 0, 0, 150);
        randomNumberX: number;
        randomNumberY: number;

        constructor() {
            this.createRandomNumberX(); 
            this.createRandomNumberY(); }

        // Zufallszahlen für die Position der Wolke
        createRandomNumberX(): number {
            this.randomNumberX = Math.floor(Math.random() * 800 + 600);
            return this.randomNumberX;
        }
        createRandomNumberY(): number {
            this.randomNumberY = Math.floor(Math.random() * 300);
            return this.randomNumberY;
        }

        addgradient(): void {
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.randomNumberX, this.randomNumberY);
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
}
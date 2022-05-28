namespace Canvas {
    export class Rock {
        randomNumberX: number;
        randomNumberY: number;

        constructor() {
            this.createRandomNumberX(); 
            this.createRandomNumberY(); }

        // Zufallszahlen für die Position der Felsen
        createRandomNumberX(): number {
            this.randomNumberX = Math.floor(Math.random() * 800 + 600);
            return this.randomNumberX;
        }
        createRandomNumberY(): number {
            this.randomNumberY = Math.floor(Math.random() * 300);
            return this.randomNumberY;
        }
    
        draw(): void {
            crc2.save();
            crc2.translate(this.randomNumberX, this.randomNumberY);
            crc2.beginPath();
            crc2.moveTo(0, 650);
            crc2.lineTo(30, 610);
            crc2.lineTo(50, 600);
            crc2.lineTo(70, 610);
            crc2.lineTo(80, 630);
            crc2.lineTo(100, 650);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
}
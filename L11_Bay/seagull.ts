namespace Bay2 {
    export class Seagull extends Movable {


        // Zufallszahlen für die Position der Möwen
        createRandomNumberX(): number {
            this.randomNumberX = Math.floor(Math.random() * 800);
            return this.randomNumberX;
        }
        createRandomNumberY(): number {
            this.randomNumberY = Math.floor(Math.random() * 100);
            return this.randomNumberY;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.randomNumberX, this.randomNumberY);
            crc2.beginPath();
            crc2.arc(100 + 0, 100, 8, 3, 0);
            crc2.arc(100 + 16, 100, 8, 3, 0);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.restore();
        }
}
}
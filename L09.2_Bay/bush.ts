namespace Canvas {
    export class Bush (): void {
        r: number = 30;
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 1, 0, 0, r);

        addgradient(): void {
            this.gradient.addColorStop(0, "rgba(0, 100, 0, 1)");
            this: gradient.addColorStop(1, "rgba(0, 100, 0, 0)");
        }

        draw(): void {
            crc2.save();
            crc2.translate(randomNumberBushX(), randomNumberBushY());
            crc2.moveTo(randomNumberBushX(), randomNumberBushY());
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        // Zufallszahlen für die Position der Büsche
        function randomNumberBushX(): number {
            let number: number = Math.floor(Math.random() * 300);
            return number;
        }
        function randomNumberBushY(): number {
            let number: number = Math.floor(Math.random() * 150 + 700);
            return number;
        }
    }
}
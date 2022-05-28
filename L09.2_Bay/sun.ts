namespace Canvas {
    export class Sun {
        r: number = 150;
        gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 60, 0, 0, r);

        addgradient(): void {
            this.gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            this.gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        }

        draw(): void {
            crc2.save();
            crc2.translate(randomNumberSun(), randomNumberSun());
            crc2.fillStyle = this.gradient;
            crc2.arc(0, 0, r, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
    }
    // Zufallszahlen für die Position der Sonne
    function randomNumberSun(): number {
        let number: number = Math.floor(Math.random() * 150 + 150);
        return number;
    }
}
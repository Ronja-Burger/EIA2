namespace Canvas {
    export class Cloud {
        translate: number;
        fillstyle: string;
        gradient: CanvasGradient; //let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 10, 0, 0, r);
        

    draw(_r: number): void {
        crc2.save();
        crc2.translate(randomNumberCloudX(), randomNumberCloudY());
        crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
        crc2.fillStyle = this.gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    addgradient(): void {
        this.gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        this.gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");
    }
}
}



// Zufallszahlen für die Position der Wolke
function randomNumberCloudX(): number {
    let number: number = Math.floor(Math.random() * 800 + 600);
    return number;
}
function randomNumberCloudY(): number {
    let number: number = Math.floor(Math.random() * 300);
    return number;
}
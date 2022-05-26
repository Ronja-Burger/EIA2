namespace Canvas {
    export class Cloud {
        translate: number;
        fillstyle: string;

    draw(): void {
        crc2.save();
        crc2.translate(randomNumberCloudX(), randomNumberCloudY());
        crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
}
}

let r: number = 80;
let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 10, 0, 0, r);

gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");



// Zufallszahlen für die Position der Wolke
function randomNumberCloudX(): number {
    let number: number = Math.floor(Math.random() * 800 + 600);
    return number;
}
function randomNumberCloudY(): number {
    let number: number = Math.floor(Math.random() * 300);
    return number;
}
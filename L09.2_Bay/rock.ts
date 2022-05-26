namespace Canvas {
    export class Rock {
        translate: number; //crc2.translate(randomNumberRockX(), randomNumberRockY());
        fillstyle: string; //crc2.fillStyle = "rgb(99, 99, 99)";


        constructor(_translate: number, _fillstyle: string) {
            this.translate = _translate;
            this.fillstyle = _fillstyle;
        }
    

        draw(): void {
            crc2.save();
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
// Zufallszahlen für die Position der Felsen
function randomNumberRockX(): number {
    let number: number = Math.floor(Math.random() * 450 + 1000);
    return number;
}
function randomNumberRockY(): number {
    let number: number = Math.floor(Math.random() * 200);
    return number;
}
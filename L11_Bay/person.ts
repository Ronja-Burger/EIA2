namespace Bay2 {
    //enum 
    export class Person extends Movable {
        x: number = 30;
        y: number = 400;
        //state = enum
        enum TASK {
        TOWATER,
        GETOUT,
        SIT,
        SWIMM,
        JUMP
    }



    // Zufallszahlen für die Position der Personen
    createRandomNumberX(): number {
        this.randomNumberX = Math.floor(Math.random() * 300 + 700);
        return this.randomNumberX;
    }
    createRandomNumberY(): number {
        this.randomNumberY = Math.floor(Math.random() * 200 + 300);
        return this.randomNumberY;
    }

    draw(): void {
        crc2.save();
        crc2.translate(this.randomNumberX, this.randomNumberY);
        crc2.beginPath();

        //Kopf
        crc2.arc(this.x + 5, this.y - 60, 11, 0, 2 * Math.PI);
        crc2.fillStyle = "rgb(0, 0, 0)";

        //Beine
        crc2.moveTo(this.x - 10, this.y + 0);
        crc2.lineTo(this.x + 5, this.y - 20);
        crc2.lineTo(this.x + 20, this.y + 0);

        //Körper
        crc2.moveTo(this.x + 5, this.y - 20);
        crc2.lineTo(this.x + 5, this.y - 50);

        //Arm links
        crc2.moveTo(this.x + 5, this.y - 45);
        crc2.lineTo(this.x - 10, this.y - 30);

        //Arm rechts
        crc2.moveTo(this.x + 5, this.y - 45);
        crc2.lineTo(this.x + 20, this.y - 30);

        //Auge links
        crc2.moveTo(this.x + 4, this.y - 65);
        crc2.lineTo(this.x + 4, this.y - 61);

        //Auge rechts
        crc2.moveTo(this.x + 10, this.y - 65);
        crc2.lineTo(this.x + 10, this.y - 61);

        //Mund
        crc2.moveTo(this.x + 10, this.y - 56);
        crc2.lineTo(this.x + 4, this.y - 56);
        crc2.lineTo(this.x + 2, this.y - 58);

        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.restore();
    }
    private task: TASK = TASK.TOWATER;
    update(): void {
        switch(this.task) {
            case TASK.GETOUT:
                crc2.translate(this.randomNumberX, this.randomNumberY - 100);
        break;
            case TASK.SIT:
                ...
        break;
            case TASK.SWIMM:

        break;
            case TASK.JUMP:
    }
}
}
}
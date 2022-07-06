namespace Bay2 {
    export abstract class Movable extends Numbers {

        move(): void {
            this.randomNumberX += -10;
            if (this.randomNumberX < 0)
                this.randomNumberX += crc2.canvas.width;
            if (this.randomNumberY < 0)
                this.randomNumberY += crc2.canvas.height;
            if (this.randomNumberX > crc2.canvas.width)
                this.randomNumberX -= crc2.canvas.width;
            if (this.randomNumberY > crc2.canvas.height)
                this.randomNumberY -= crc2.canvas.height;
        }
    }
}
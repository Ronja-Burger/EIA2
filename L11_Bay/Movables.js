"use strict";
var Bay2;
(function (Bay2) {
    class Movable extends Bay2.Numbers {
        move() {
            this.randomNumberX += -10;
            if (this.randomNumberX < 0)
                this.randomNumberX += Bay2.crc2.canvas.width;
            if (this.randomNumberY < 0)
                this.randomNumberY += Bay2.crc2.canvas.height;
            if (this.randomNumberX > Bay2.crc2.canvas.width)
                this.randomNumberX -= Bay2.crc2.canvas.width;
            if (this.randomNumberY > Bay2.crc2.canvas.height)
                this.randomNumberY -= Bay2.crc2.canvas.height;
        }
    }
    Bay2.Movable = Movable;
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=Movables.js.map
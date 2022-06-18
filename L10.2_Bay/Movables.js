"use strict";
var Bay;
(function (Bay) {
    class Movable extends Bay.Numbers {
        move() {
            this.randomNumberX += -10;
            if (this.randomNumberX < 0)
                this.randomNumberX += Bay.crc2.canvas.width;
            if (this.randomNumberY < 0)
                this.randomNumberY += Bay.crc2.canvas.height;
            if (this.randomNumberX > Bay.crc2.canvas.width)
                this.randomNumberX -= Bay.crc2.canvas.width;
            if (this.randomNumberY > Bay.crc2.canvas.height)
                this.randomNumberY -= Bay.crc2.canvas.height;
        }
    }
    Bay.Movable = Movable;
})(Bay || (Bay = {}));
//# sourceMappingURL=Movables.js.map
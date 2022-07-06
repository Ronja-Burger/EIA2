"use strict";
var Bay2;
(function (Bay2) {
    //enum 
    class Person extends Bay2.Movable {
        x = 30;
        y = 400;
    }
    Bay2.Person = Person;
    //state = enum
    let TASK;
    (function (TASK) {
        TASK[TASK["TOWATER"] = 0] = "TOWATER";
        TASK[TASK["GETOUT"] = 1] = "GETOUT";
        TASK[TASK["SIT"] = 2] = "SIT";
        TASK[TASK["SWIMM"] = 3] = "SWIMM";
        TASK[TASK["JUMP"] = 4] = "JUMP";
    })(TASK || (TASK = {}));
    // Zufallszahlen für die Position der Personen
    createRandomNumberX();
    number;
    {
        this.randomNumberX = Math.floor(Math.random() * 300 + 700);
        return this.randomNumberX;
    }
    createRandomNumberY();
    number;
    {
        this.randomNumberY = Math.floor(Math.random() * 200 + 300);
        return this.randomNumberY;
    }
    draw();
    void {
        crc2: Bay2.crc2, : .save(),
        crc2: Bay2.crc2, : .translate(this.randomNumberX, this.randomNumberY),
        crc2: Bay2.crc2, : .beginPath(),
        //Kopf
        crc2: Bay2.crc2, : .arc(this.x + 5, this.y - 60, 11, 0, 2 * Math.PI),
        crc2: Bay2.crc2, : .fillStyle = "rgb(0, 0, 0)",
        //Beine
        crc2: Bay2.crc2, : .moveTo(this.x - 10, this.y + 0),
        crc2: Bay2.crc2, : .lineTo(this.x + 5, this.y - 20),
        crc2: Bay2.crc2, : .lineTo(this.x + 20, this.y + 0),
        //Körper
        crc2: Bay2.crc2, : .moveTo(this.x + 5, this.y - 20),
        crc2: Bay2.crc2, : .lineTo(this.x + 5, this.y - 50),
        //Arm links
        crc2: Bay2.crc2, : .moveTo(this.x + 5, this.y - 45),
        crc2: Bay2.crc2, : .lineTo(this.x - 10, this.y - 30),
        //Arm rechts
        crc2: Bay2.crc2, : .moveTo(this.x + 5, this.y - 45),
        crc2: Bay2.crc2, : .lineTo(this.x + 20, this.y - 30),
        //Auge links
        crc2: Bay2.crc2, : .moveTo(this.x + 4, this.y - 65),
        crc2: Bay2.crc2, : .lineTo(this.x + 4, this.y - 61),
        //Auge rechts
        crc2: Bay2.crc2, : .moveTo(this.x + 10, this.y - 65),
        crc2: Bay2.crc2, : .lineTo(this.x + 10, this.y - 61),
        //Mund
        crc2: Bay2.crc2, : .moveTo(this.x + 10, this.y - 56),
        crc2: Bay2.crc2, : .lineTo(this.x + 4, this.y - 56),
        crc2: Bay2.crc2, : .lineTo(this.x + 2, this.y - 58),
        crc2: Bay2.crc2, : .strokeStyle = "#000000",
        crc2: Bay2.crc2, : .stroke(),
        crc2: Bay2.crc2, : .restore()
    };
    task: TASK = TASK.TOWATER;
    update();
    void {
        : .task
    };
    {
        TASK.GETOUT;
        Bay2.crc2.translate(this.randomNumberX, this.randomNumberY - 100);
        break;
        TASK.SIT;
        break;
        TASK.SWIMM;
        break;
        TASK.JUMP;
    }
})(Bay2 || (Bay2 = {}));
//# sourceMappingURL=person.js.map
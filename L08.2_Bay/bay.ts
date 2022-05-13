namespace Canvas {
    window.addEventListener("load", start);

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    

    function start(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        drawSky();
        drawSea();
        drawBeach();
        drawSun();
        drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud(); drawCloud();
        drawPalmLeaf();
        //console.log(crc2.canvas.height, crc2.canvas.width);
    }

    function drawSky(): void {
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }

    function drawSea(): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(83, 134, 139)";
        crc2.fillRect(0, canvas.height / 2, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
    }

    function drawBeach(): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(205, 170, 125)";
        crc2.fillRect(0, 650, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
        //console.log(canvas.height);
    }



    // Sonne

    function drawSun(): void {
        let r: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 60, 0, 0, r);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(randomNumberSun(), randomNumberSun());
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    // Zufallszahlen für die Position der Sonne
    function randomNumberSun(): number {
        let number: number = Math.floor(Math.random() * 150 + 150);
        return number;
    }
    console.log(randomNumberSun());





    // Wolke

    function drawCloud(): void {
        let r: number = 80;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 10, 0, 0, r);

        gradient.addColorStop(0, "HSLA(0, 0%, 100%, 1)");
        gradient.addColorStop(1, "HSLA(0, 0%, 100%, 0)");

        crc2.save();
        crc2.translate(randomNumberCloudX(), randomNumberCloudY());
        crc2.moveTo(randomNumberCloudX(), randomNumberCloudY());
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    // Zufallszahlen für die Position der Wolke
    function randomNumberCloudX(): number {
        let number: number = Math.floor(Math.random() * 800 + 600);
        return number;
    }
    console.log(randomNumberCloudX());


    function randomNumberCloudY(): number {
        let number: number = Math.floor(Math.random() * 300);
        return number;
    }
    console.log(randomNumberCloudY());


    function drawPalmLeaf(): void {
            crc2.beginPath();
            crc2.strokeStyle = "rgb(0, 100, 0)";
            let path: Path2D = new Path2D();
            path.arc(600, 800, 200, 180, 2 * Math.PI);
            crc2.stroke(path);
            crc2.closePath();
          }
    }


    //function drawRocks(): void {}

    //function drawShip(): void {}

    //function drawPersonsAtBeach(): void {}

    //function drawPersonsAtSea(): void {}
}
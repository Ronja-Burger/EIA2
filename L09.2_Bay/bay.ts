namespace Canvas {
    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    

    function start(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        drawSky();
        drawSea();
        drawBeach();
        for (let index: number = 0; index < 5; index++) {
            drawPersonAtBeach();
        }
        //drawPalmLeaf();
        drawPersonAtBeach();
        drawSeagull(); drawSeagull(); drawSeagull();
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



    function drawPersonAtBeach(): void {
        let x: number = 30;
        let y: number = 400;
        crc2.save();
        crc2.translate( randomNumberPersonX(), randomNumberPersonY());
        crc2.beginPath();

        //Kopf
        crc2.arc(x + 5, y - 60, 11, 0, 2 * Math.PI);
        crc2.fillStyle = "rgb(0, 0, 0)";

        //Beine
        crc2.moveTo(x - 10, y + 0);
        crc2.lineTo(x + 5, y - 20);
        crc2.lineTo(x + 20, y + 0);

        //Körper
        crc2.moveTo(x + 5, y - 20);
        crc2.lineTo(x + 5, y - 50);

        //Arm links
        crc2.moveTo(x + 5, y - 45);
        crc2.lineTo(x - 10, y - 30);

        //Arm rechts
        crc2.moveTo(x + 5, y - 45);
        crc2.lineTo(x + 20, y - 30);

        //Auge links
        crc2.moveTo(x + 4, y - 65);
        crc2.lineTo(x + 4, y - 61);

        //Auge rechts
        crc2.moveTo(x + 10, y - 65);
        crc2.lineTo(x + 10, y - 61);

        //Mund
        crc2.moveTo(x + 10, y - 56);
        crc2.lineTo(x + 4, y - 56);
        crc2.lineTo(x + 2, y - 58);

        crc2.stroke();
        crc2.restore();
    }
    // Zufallszahlen für die Position der Urlauber
    function randomNumberPersonX(): number {
        let number: number = Math.floor(Math.random() * 300 + 700);
        return number;
    }
    function randomNumberPersonY(): number {
        let number: number = Math.floor(Math.random() * 200 + 300);
        return number;
    }

    function drawSeagull(): void {
        crc2.save();
        crc2.translate(randomNumberSeagullx(), randomNumberSeagully());
        crc2.beginPath();
        crc2.arc(100 + 0, 100, 8, 3, 0);
        crc2.arc(100 + 16, 100, 8, 3, 0);
        crc2.stroke();
    }
    // Zufallszahlen für die Position der Möven
    function randomNumberSeagullx(): number {
        let number: number = Math.floor(Math.random() * 800);
        return number;
    }
    function randomNumberSeagully(): number {
        let number: number = Math.floor(Math.random() * 100);
        return number;
    }
    
}

    //function drawShip(): void {}


    //function drawPersonsAtSea(): void {}
    
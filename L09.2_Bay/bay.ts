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
        drawSeagull(); drawSeagull(); drawSeagull();
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
    
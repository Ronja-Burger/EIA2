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
        drawBushes();
        drawClouds();
        drawPersons();
        drawRocks();
        drawSeagulls();
        drawSun();
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
    }

    // Objekte       
    let bush: Bush = new Bush();
    function drawBushes(): void {
        bush.draw();
    }

    let cloud: Cloud = new Cloud();
    function drawClouds(): void {
        cloud.draw();
    }

    let person: Person = new Person();
    function drawPersons(): void {
        person.draw();
    }

    let rock: Rock = new Rock();
    function drawRocks(): void {
        rock.draw();
    }

    let seagull: Seagull = new Seagull();
    function drawSeagulls(): void {
        seagull.draw();
    }

    let sun: Sun = new Sun();
    function drawSun(): void {
        sun.draw();
    }
}

    
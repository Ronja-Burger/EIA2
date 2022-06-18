namespace Bay {
    window.addEventListener("load", start);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imageData: ImageData; //brauch ich in finction update nochmal
    let cloud: Cloud;

    //Array vom Typ Superklasse

    function start(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        drawSky();
        drawSea();
        drawBeach();

        // Objekte  
        let sun: Sun = new Sun();
        sun.draw();

        let rock: Rock = new Rock();
        rock.draw();

        let bush: Bush = new Bush();
        bush.draw();

        // Hintergrund speichern
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        cloud = new Cloud();
        cloud.draw();

        let person: Person = new Person();
        person.draw();

        let seagull: Seagull = new Seagull();
        seagull.draw();

        setInterval(update, 1000 / 24);
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


    // Animationen
    for (let moveable of Moveables) {
        moveable.move();
        moveable.draw();
    }

    function update(): void {
        crc2.putImageData(imageData, 0, 0);
        cloud.move();
        cloud.draw();
    }
}


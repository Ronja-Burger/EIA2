namespace Bay2 {
    window.addEventListener("load", start);
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imageData: ImageData; //brauch ich in function update nochmal
    let sun: Sun;
    let rock: Rock;
    let bush: Bush;
    let cloud: Cloud;
    let person: Person;
    let seagull: Seagull;
    let moveables: Movable[] = [];


    function start(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        console.log(canvas.width, canvas.height);
        drawSky();
        drawSea();
        drawBeach();

        // Objekte  
        sun = new Sun();
        sun.draw();

        for (let index: number = 8; index > 0; index--) {
            rock = new Rock();
            rock.draw();
        }

        for (let index: number = 10; index > 0; index--) {
            bush = new Bush();
            bush.draw();
        }

        // Hintergrund speichern
        imageData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let index: number = 10; index > 0; index--) {
            cloud = new Cloud();
            cloud.draw();
            moveables.push(cloud);
        }

        for (let index: number = 3; index > 0; index--) {
            person = new Person();
            person.draw();
            moveables.push(person);
        }

        for (let index: number = 3; index > 0; index--) {
            seagull = new Seagull();
            seagull.draw();
            moveables.push(seagull);
        }

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


    // Animation
    function update(): void {
        crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move();
            moveable.draw();
        }
    }
}


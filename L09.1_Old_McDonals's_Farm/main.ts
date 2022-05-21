namespace Farm {
    window.addEventListener("load", startFarm);

    export let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("div");


    export let hay: number = 50;
    export let silage: number = 99;
    export let catfood: number = 20;
    export let dogfood: number = 30;
    export let corn: number = 20;

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;


    function startFarm(): void {
        let horse: HTMLImageElement = <HTMLImageElement>document.getElementById("Horse");
        let cow: HTMLImageElement = <HTMLImageElement>document.getElementById("Cow");
        let cat: HTMLImageElement = <HTMLImageElement>document.getElementById("Cat");
        let dog: HTMLImageElement = <HTMLImageElement>document.getElementById("Dog");
        let rooster: HTMLImageElement = <HTMLImageElement>document.getElementById("Rooster");


// neue Tiere        
        let newhorse: Animal = new Animal("horse", "hay", "wiiha");

        let newcow: Animal = new Animal("cow", "silage", "mooh");

        let newcat: Animal = new Animal("cat", "catfood", "meow");

        let newdog: Animal = new Animal("dog", "dogfood", "woof");

        let chicken: Animal = new Animal("chicken", "corn", "gack");
    

// Hintergrund
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;

        crc2.beginPath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.3, "white");
        gradient.addColorStop(1, "darkgreen");


        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();


// Alerts        
        horse.addEventListener("click", horseEatAndSing);
        function horseEatAndSing(): void {
            newhorse.eat();
            newhorse.sing();
    }

        cow.addEventListener("click", cowEatAndSing);
        function cowEatAndSing(): void {
            newcow.eat();
            newcow.sing();
    }

        cat.addEventListener("click", catEatAndSing);
        function catEatAndSing(): void {
            newcat.eat();
            newcat.sing();
    }

        dog.addEventListener("click", dogEatAndSing);
        function dogEatAndSing(): void {
            newdog.eat();
            newdog.sing();
    }

        rooster.addEventListener("click", chickenEatAndSing);
        function chickenEatAndSing(): void {
            chicken.eat();
            chicken.sing();
    }

    
    }
}
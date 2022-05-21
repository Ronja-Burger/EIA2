namespace Farm {
    window.addEventListener("load", startFarm);

    let farmAnimals: Animal[] = [];
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
        farmAnimals.push(newhorse);

        let newcow: Animal = new Animal("cow", "silage", "mooh");
        farmAnimals.push(newcow);

        let newcat: Animal = new Animal("cat", "catfood", "meow");
        farmAnimals.push(newcat);

        let newdog: Animal = new Animal("dog", "dogfood", "woof");
        farmAnimals.push(newdog);

        let chicken: Animal = new Animal("chicken", "corn", "gack");
        farmAnimals.push(chicken);
    

// Hintergrund
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;

        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();



// Alerts        
        horse.addEventListener("click", EatAndSing);
        cow.addEventListener("click", EatAndSing);
        cat.addEventListener("click", EatAndSing);
        dog.addEventListener("click", EatAndSing);
        rooster.addEventListener("click", EatAndSing);
    
        function EatAndSing(): void {
            for (let animal of farmAnimals) {
                animal.eat();
                animal.sing();
            }
        }
    }
}
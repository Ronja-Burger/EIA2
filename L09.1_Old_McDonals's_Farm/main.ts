namespace Farm {
    window.addEventListener("load", startFarm);


    export let hay: number;
    export let silage: number;
    export let catfood: number;
    export let dogfood: number;
    export let corn: number;


    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;


    function startFarm(): void {
        let horse: HTMLImageElement = <HTMLImageElement>document.getElementById("Horse");
        let cow: HTMLImageElement = <HTMLImageElement>document.getElementById("Cow");
        let cat: HTMLImageElement = <HTMLImageElement>document.getElementById("Cat");
        let dog: HTMLImageElement = <HTMLImageElement>document.getElementById("Dog");
        let rooster: HTMLImageElement = <HTMLImageElement>document.getElementById("Rooster");


        // Futter & Vorrat
        let haystorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("haystorage");
        let silagestorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("silagestorage");
        let catfoodstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("catfoodstorage");
        let dogfoodstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dogfoodstorage");
        let cornstorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("cornstorage");

        hay = 10;
        haystorage.innerHTML = String(hay);
        silage = 15;
        silagestorage.innerHTML = String(silage);
        catfood = 5;
        catfoodstorage.innerHTML = String(catfood);
        dogfood = 5;
        dogfoodstorage.innerHTML = String(dogfood);
        corn = 5;
        cornstorage.innerHTML = String(corn);


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
            haystorage.innerHTML = String(hay);        }

        cow.addEventListener("click", cowEatAndSing);
        function cowEatAndSing(): void {
            newcow.eat();
            newcow.sing();
            silagestorage.innerHTML = String(silage);
        }

        cat.addEventListener("click", catEatAndSing);
        function catEatAndSing(): void {
            newcat.eat();
            newcat.sing();
            catfoodstorage.innerHTML = String(catfood);
        }

        dog.addEventListener("click", dogEatAndSing);
        function dogEatAndSing(): void {
            newdog.eat();
            newdog.sing();
            dogfoodstorage.innerHTML = String(dogfood);
        }

        rooster.addEventListener("click", chickenEatAndSing);
        function chickenEatAndSing(): void {
            chicken.eat();
            chicken.sing();
            cornstorage.innerHTML = String(corn);
        }
    }
}
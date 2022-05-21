namespace Farm {
    window.addEventListener("load", startFarm);

    let farmAnimals: Animal[] = [];
    export let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("div");


    export let hay: number = 50;
    export let silage: number = 99;
    export let catfood: number = 20;
    export let dogfood: number = 30;
    export let corn: number = 20;


    function startFarm(): void {
        let horse: HTMLImageElement = <HTMLImageElement>document.getElementById("#horse");
        let cow: HTMLImageElement = <HTMLImageElement>document.getElementById("#cow");
        let cat: HTMLImageElement = <HTMLImageElement>document.getElementById("#cat");
        let dog: HTMLImageElement = <HTMLImageElement>document.getElementById("#dog");
        let rooster: HTMLImageElement = <HTMLImageElement>document.getElementById("#rooster");


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
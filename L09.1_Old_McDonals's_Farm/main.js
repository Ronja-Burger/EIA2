"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", startFarm);
    let farmAnimals = [];
    Farm.span = document.querySelector("div");
    Farm.hay = 50;
    Farm.silage = 99;
    Farm.catfood = 20;
    Farm.dogfood = 30;
    Farm.corn = 20;
    function startFarm() {
        let horse = document.getElementById("#horse");
        let cow = document.getElementById("#cow");
        let cat = document.getElementById("#cat");
        let dog = document.getElementById("#dog");
        let rooster = document.getElementById("#rooster");
        let newhorse = new Farm.Animal("horse", "hay", "wiiha");
        farmAnimals.push(newhorse);
        let newcow = new Farm.Animal("cow", "silage", "mooh");
        farmAnimals.push(newcow);
        let newcat = new Farm.Animal("cat", "catfood", "meow");
        farmAnimals.push(newcat);
        let newdog = new Farm.Animal("dog", "dogfood", "woof");
        farmAnimals.push(newdog);
        let chicken = new Farm.Animal("chicken", "corn", "gack");
        farmAnimals.push(chicken);
        horse.addEventListener("click", EatAndSing);
        cow.addEventListener("click", EatAndSing);
        cat.addEventListener("click", EatAndSing);
        dog.addEventListener("click", EatAndSing);
        rooster.addEventListener("click", EatAndSing);
        function EatAndSing() {
            for (let animal of farmAnimals) {
                animal.eat();
                animal.sing();
            }
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map
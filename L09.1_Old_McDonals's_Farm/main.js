"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", startFarm);
    let farmAnimals = [];
    Farm.span = document.querySelector("div");
    let horse = document.getElementById("#horse");
    let cow = document.getElementById("#cow");
    let cat = document.getElementById("#cat");
    let dog = document.getElementById("#dog");
    let rooster = document.getElementById("#rooster");
    Farm.hay = 50;
    Farm.silage = 99;
    Farm.catfood = 20;
    Farm.dogfood = 30;
    Farm.corn = 20;
    function startFarm() {
        let horse = new Farm.Animal("horse", "hay", "wiiha");
        farmAnimals.push(horse);
        let cow = new Farm.Animal("cow", "silage", "mooh");
        farmAnimals.push(cow);
        let cat = new Farm.Animal("cat", "catfood", "meow");
        farmAnimals.push(cat);
        let dog = new Farm.Animal("dog", "dogfood", "woof");
        farmAnimals.push(dog);
        let chicken = new Farm.Animal("chicken", "corn", "gack");
        farmAnimals.push(chicken);
    }
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
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map
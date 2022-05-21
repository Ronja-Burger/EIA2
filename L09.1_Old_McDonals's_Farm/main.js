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
    let crc2;
    let canvas;
    function startFarm() {
        let horse = document.getElementById("Horse");
        let cow = document.getElementById("Cow");
        let cat = document.getElementById("Cat");
        let dog = document.getElementById("Dog");
        let rooster = document.getElementById("Rooster");
        // neue Tiere        
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
        // Hintergrund
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
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
        function EatAndSing() {
            for (let animal of farmAnimals) {
                animal.eat();
                animal.sing();
            }
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map
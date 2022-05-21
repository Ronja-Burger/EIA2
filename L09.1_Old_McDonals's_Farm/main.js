"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", startFarm);
    //export let haystorage: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("haystorage");
    Farm.hay = 10;
    Farm.silage = 15;
    Farm.catfood = 5;
    Farm.dogfood = 5;
    Farm.corn = 5;
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
        let newcow = new Farm.Animal("cow", "silage", "mooh");
        let newcat = new Farm.Animal("cat", "catfood", "meow");
        let newdog = new Farm.Animal("dog", "dogfood", "woof");
        let chicken = new Farm.Animal("chicken", "corn", "gack");
        // Hintergrund
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = screen.width;
        canvas.height = screen.height;
        crc2.beginPath();
        let gradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.3, "white");
        gradient.addColorStop(1, "darkgreen");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.stroke();
        crc2.closePath();
        // Alerts        
        horse.addEventListener("click", horseEatAndSing);
        function horseEatAndSing() {
            newhorse.eat();
            newhorse.sing();
        }
        cow.addEventListener("click", cowEatAndSing);
        function cowEatAndSing() {
            newcow.eat();
            newcow.sing();
        }
        cat.addEventListener("click", catEatAndSing);
        function catEatAndSing() {
            newcat.eat();
            newcat.sing();
        }
        dog.addEventListener("click", dogEatAndSing);
        function dogEatAndSing() {
            newdog.eat();
            newdog.sing();
        }
        rooster.addEventListener("click", chickenEatAndSing);
        function chickenEatAndSing() {
            chicken.eat();
            chicken.sing();
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map
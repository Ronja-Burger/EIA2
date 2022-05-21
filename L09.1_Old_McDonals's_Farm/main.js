"use strict";
var Farm;
(function (Farm) {
    window.addEventListener("load", startFarm);
    let crc2;
    let canvas;
    function startFarm() {
        let horse = document.getElementById("Horse");
        let cow = document.getElementById("Cow");
        let cat = document.getElementById("Cat");
        let dog = document.getElementById("Dog");
        let rooster = document.getElementById("Rooster");
        // Futter & Vorrat
        let haystorage = document.getElementById("haystorage");
        let silagestorage = document.getElementById("silagestorage");
        let catfoodstorage = document.getElementById("catfoodstorage");
        let dogfoodstorage = document.getElementById("dogfoodstorage");
        let cornstorage = document.getElementById("cornstorage");
        Farm.hay = 10;
        haystorage.innerHTML = String(Farm.hay);
        Farm.silage = 15;
        silagestorage.innerHTML = String(Farm.silage);
        Farm.catfood = 5;
        catfoodstorage.innerHTML = String(Farm.catfood);
        Farm.dogfood = 5;
        dogfoodstorage.innerHTML = String(Farm.dogfood);
        Farm.corn = 5;
        cornstorage.innerHTML = String(Farm.corn);
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
            haystorage.innerHTML = String(Farm.hay);
        }
        cow.addEventListener("click", cowEatAndSing);
        function cowEatAndSing() {
            newcow.eat();
            newcow.sing();
            silagestorage.innerHTML = String(Farm.silage);
        }
        cat.addEventListener("click", catEatAndSing);
        function catEatAndSing() {
            newcat.eat();
            newcat.sing();
            catfoodstorage.innerHTML = String(Farm.catfood);
        }
        dog.addEventListener("click", dogEatAndSing);
        function dogEatAndSing() {
            newdog.eat();
            newdog.sing();
            dogfoodstorage.innerHTML = String(Farm.dogfood);
        }
        rooster.addEventListener("click", chickenEatAndSing);
        function chickenEatAndSing() {
            chicken.eat();
            chicken.sing();
            cornstorage.innerHTML = String(Farm.corn);
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=main.js.map
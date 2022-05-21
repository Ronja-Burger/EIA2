"use strict";
var Farm;
(function (Farm) {
    class Animal {
        species;
        food;
        noise;
        constructor(_species, _food, _noise) {
            this.species = _species;
            this.food = _food;
            this.noise = _noise;
        }
        eat() {
            switch (this.food) {
                case "hay":
                    Farm.hay -= 2;
                    if (Farm.hay == 0) {
                        alert("hay is empty");
                    }
                    break;
                case "silage":
                    Farm.silage -= 3;
                    if (Farm.silage == 0) {
                        alert("silage is empty");
                    }
                    break;
                case "catfood":
                    Farm.catfood -= 1;
                    if (Farm.catfood == 0) {
                        alert("cat food is empty");
                    }
                    break;
                case "dogfood":
                    Farm.dogfood -= 1;
                    if (Farm.dogfood == 0) {
                        alert("dog food is empty");
                    }
                    break;
                case "corn":
                    Farm.corn -= 1;
                    if (Farm.corn == 0) {
                        alert("corn is empty");
                    }
                    break;
            }
        }
        sing() {
            alert("x" + this.species + "x" + this.noise + "x");
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=AnimalClass.js.map
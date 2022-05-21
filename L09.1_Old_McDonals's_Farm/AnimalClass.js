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
            alert("Old MACDONALD had a farm," + +"E-I-E-I-O" + +"And on his farm he had a" + this.species + +"E-I-E-I-O" + +"With a" + this.noise + this.noise, "here", "And a" + this.noise + this.noise, "there" + +"Here a " + this.noise, ", there a" + this.noise + +"Everywhere a" + this.noise + this.noise + +"Old MacDonald had a farm" + +"E-I-E-I-O");
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=AnimalClass.js.map
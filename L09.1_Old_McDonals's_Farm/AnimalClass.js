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
                        //haystorage.(hay);
                    }
                    break;
                case "silage":
                    Farm.silage -= 3;
                    if (Farm.silage == 0) {
                        alert("silage is empty");
                        //console.log(silage);
                    }
                    break;
                case "catfood":
                    Farm.catfood -= 1;
                    if (Farm.catfood == 0) {
                        alert("cat food is empty");
                        //console.log(catfood);
                    }
                    break;
                case "dogfood":
                    Farm.dogfood -= 1;
                    if (Farm.dogfood == 0) {
                        alert("dog food is empty");
                        //console.log(dogfood);
                    }
                    break;
                case "corn":
                    Farm.corn -= 1;
                    if (Farm.corn == 0) {
                        alert("corn is empty");
                        //console.log(corn);
                    }
                    break;
            }
        }
        sing() {
            let songtext = "Old McDonald had a farm\n E-I-E-I-O\n And on his farm he had a " + this.species + "\n E-I-E-I-O\n With a " + this.noise + " " + this.noise + " here\n And a " + this.noise + " " + this.noise + " there\n Here a " + this.noise + ", there a " + this.noise + "\n Everywhere a " + this.noise + " " + this.noise + "\n Old MacDonald had a farm\n E-I-E-I-O";
            alert(songtext);
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=AnimalClass.js.map
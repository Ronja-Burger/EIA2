namespace Farm {
export class Animal {
    species: string;
    food: string;
    noise: string;

    constructor (_species: string, _food: string, _noise: string) {
        this.species = _species;
        this.food = _food;
        this.noise = _noise;
    }

    eat(): void {
        switch (this.food) {
            case "hay":
                hay -= 2;
                if (hay == 0) {
                    alert("hay is empty");
                }
                break;
            case "silage":
                silage -= 3;
                if (silage == 0) {
                    alert("silage is empty");
                }
                break;
            case "catfood":
                catfood -= 1;
                if (catfood == 0) {
                    alert("cat food is empty");
                }
                break;
            case "dogfood":
                dogfood -= 1;
                if (dogfood == 0) {
                    alert("dog food is empty");
                }
                break;
            case "corn":
                corn -= 1;
                if (corn == 0) {
                    alert("corn is empty");
                }
                break;
        }
    }

    sing(): void {
        alert ("Old MACDONALD had a farm," + <br> + "E-I-E-I-O" + <br> + "And on his farm he had a" + this.species + <br> + "E-I-E-I-O" + <br> + "With a" + this.noise + this.noise "here" "And a" + this.noise + this.noise "there" + <br> + "Here a " + this.noise", there a" + this.noise + <br> + "Everywhere a" + this.noise + this.noise + <br> + "Old MacDonald had a farm" + <br> + "E-I-E-I-O");
    }
}
}
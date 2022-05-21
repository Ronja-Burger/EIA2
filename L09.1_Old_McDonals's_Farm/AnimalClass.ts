namespace Farm {
    export class Animal {
        species: string;
        food: string;
        noise: string;

        constructor(_species: string, _food: string, _noise: string) {
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
                        haystorage.innerHTML = "hay";
                    }
                    break;
                case "silage":
                    silage -= 3;
                    if (silage == 0) {
                        alert("silage is empty");
                        silagestorage.innerHTML = "silage";
                    }
                    break;
                case "catfood":
                    catfood -= 1;
                    if (catfood == 0) {
                        alert("cat food is empty");
                        catfoodstorage.innerHTML = "catfood";
                    }
                    break;
                case "dogfood":
                    dogfood -= 1;
                    if (dogfood == 0) {
                        alert("dog food is empty");
                        dogfoodstorage.innerHTML = "dogfood";
                    }
                    break;
                case "corn":
                    corn -= 1;
                    if (corn == 0) {
                        alert("corn is empty");
                        cornstorage.innerHTML = "corn";
                    }
                    break;
            }
        }
    sing(): void {
        let songtext: string = "Old McDonald had a farm\n E-I-E-I-O\n And on his farm he had a " + this.species + "\n E-I-E-I-O\n With a " + this.noise + " " + this.noise + " here\n And a " + this.noise + " " + this.noise + " there\n Here a " + this.noise + ", there a " + this.noise + "\n Everywhere a " + this.noise + " " + this.noise + "\n Old MacDonald had a farm\n E-I-E-I-O";
        alert(songtext);
    }
}
}
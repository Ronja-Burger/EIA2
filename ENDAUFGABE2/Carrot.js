var garden;
(function (garden) {
    class Carrot extends garden.Plant {
        name = "Carrot";
        growthTime = 180;
        grow(parent) {
            this.field = parent; //give clicked element to field
            console.log("grow");
            this.image = document.createElement("img"); // create new Image
            this.image.setAttribute("src", "Emojis/veggies/carrot_1f955.png"); // define which image
            this.image.classList.add("small"); // give image a class
            let thisImage = this.image; // give this.image to a variable, so that ist is easier to work further
            setTimeout(function () { thisImage.classList.add("medium"); thisImage.classList.remove("small"); }, 10000); // replace class small with class medium after one minute
            setTimeout(function () { thisImage.classList.add("big"); thisImage.classList.remove("medium"); }, 20000); // replace class medium with class big after another minute
            this.field.appendChild(this.image); // append all this stuff to the clicked field
        }
    }
    garden.Carrot = Carrot;
})(garden || (garden = {}));
//# sourceMappingURL=Carrot.js.map
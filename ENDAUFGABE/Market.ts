namespace garden {

    export class Market { // brauchen wir diese Klasse tatsächlich?

        totalCapital: number;
        seedlings: Product[]; // assoziatives Array
        cropProducts: Product[]; // brauchen wir das? -> zeigt Ernte im Markt an?
        dung: Product;
        pesticide: Product;


        constructor(_totalCapital: number, _seeldings: Product[], _cropProducts: Product[], _dung: Product, _pesticide: Product) {
            this.totalCapital = _totalCapital;
            this.seedlings = _seeldings;
            this.cropProducts = _cropProducts;
            this.dung = _dung;
            this.pesticide = _pesticide;
            setInterval(this.changePrices, 60000); // every minute the prices are changing
        }

        // changes prices for seedlings, cropped products, dung and pesticides
        changePrices(): void {
            for (var seedling of this.seedlings) {
                seedling.changePrice();
            }
            for (var cropProduct of this.cropProducts) {
                cropProduct.changePrice();
            }
            this.dung.changePrice();
            this.pesticide.changePrice(); // calls function from class "Product"
        }

        // counts down amount of seedlings in your storage
        decreaseSeedling(_name: string): void {
            for (let entry of this.seedlings) { // iterates trough the array "seedlings" in which our bought seedlings are stored
                if (entry.name == _name) // if entry in array is a plant, decrease the amount of that plant (comparison by names)
                    entry.amount -= 1;
            }
        }

        // counts down amount of dung in your storage
        decreaseDung(): void {
            this.dung.amount -= 1;
        }

        /* addProduct(_product: Product): void {
            this.totalCapital += _product.currentPrice; // brauchen wir das überhaupt? -> zu cropPlant? in Field
        } */

        // counts down amount of pesticides in your storage
        decreasePesticid(): void {
            this.pesticide.amount -= 1;
        }

        // decreases capital by price of product
        buyProduct(_product: Product): void {
            this.totalCapital -= _product.currentPrice; // decrease price
            _product.amount += 1; // adds the product in your storage
        }

        sellProduct(_product: Product): void { // zu cropPlant? in Field
            this.totalCapital += _product.currentPrice + 1; // ist das An- oder Verkaufspreis?
            _product.amount -= 1;
        }
    }
}

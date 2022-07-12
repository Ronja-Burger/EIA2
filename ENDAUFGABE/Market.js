"use strict";
var farm;
(function (farm) {
    class Market {
        totalCapital;
        seedlings; // assoziatives Array
        cropProducts; // brauchen wir das? -> zeigt Ernte im Markt an?
        dung;
        pesticide;
        constructor(_totalCapital, _seeldings, _cropProducts, _dung, _pesticide) {
            this.totalCapital = _totalCapital;
            this.seedlings = _seeldings;
            this.cropProducts = _cropProducts;
            this.dung = _dung;
            this.pesticide = _pesticide;
            setInterval(this.changePrices, 60000); // every minute the prices are changing
        }
        // changes prices for seedlings, cropped products, dung and pesticides
        changePrices() {
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
        decreaseSeedling(_name) {
            this.seedlings[_name].amount -= 1;
        }
        // counts down amount of dung in your storage
        decreaseDung() {
            this.dung.amount -= 1;
        }
        /* addProduct(_product: Product): void {
            this.totalCapital += _product.currentPrice; // brauchen wir das überhaupt? -> zu cropPlant? in Field
        } */
        // counts down amount of pesticides in your storage
        decreasePesticid() {
            this.pesticide.amount -= 1;
        }
        // decreases capital by price of product
        buyProduct(_product) {
            this.totalCapital -= _product.currentPrice; // decrease price
            _product.amount += 1; // adds the product in your storage
        }
        sellProduct(_product) {
            this.totalCapital += _product.currentPrice + 1; // ist das An- oder Verkaufspreis?
            _product.amount -= 1;
        }
    }
    farm.Market = Market;
})(farm || (farm = {}));
//# sourceMappingURL=Market.js.map
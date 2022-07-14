"use strict";
var garden;
(function (garden) {
    class Product {
        name;
        currentPrice; // das Gleiche wie MaxPrice?
        maxPrice = garden.priceVariation; // 3 oder 5 - warum findet der das nicht?
        minPrice = 1;
        amount = 0;
        constructor(name, _minPrice, _maxPrice) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
        }
        changePrice() {
            this.currentPrice = Math.floor(Math.random() * (this.minPrice - this.maxPrice)); // ändert alle Preise auf einmal?
        }
    }
    garden.Product = Product;
})(garden || (garden = {}));
//# sourceMappingURL=Product.js.map
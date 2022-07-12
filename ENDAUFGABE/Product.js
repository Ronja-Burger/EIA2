"use strict";
var farm;
(function (farm) {
    class Product {
        name;
        currentPrice; // das Gleiche wie MaxPrice?
        maxPrice = priceVariation; // 3 oder 5 - warum findet der das nicht?
        minPrice = 1; // wie greifen wir hier den eingestellten maximumpreis ab?
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
    farm.Product = Product;
})(farm || (farm = {}));
//# sourceMappingURL=Product.js.map
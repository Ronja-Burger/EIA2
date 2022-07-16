"use strict";
var garden;
(function (garden) {
    class Field extends garden.Plant {
        plants;
        plant;
        hTMLDivElement;
        growthProzss = 0;
        pestAttack;
        pestTime;
        waterStock;
        waterNeed;
        waterNeedTime = 0;
        dungStock;
        dungNeed;
        dungNeedTime = 0;
        maxCareTime = 60;
        currentCareTime = 0;
        constructor(_plants, _HTMLDivElement) {
            super();
            this.plants = _plants;
            this.hTMLDivElement = _HTMLDivElement;
            setInterval(this.grow, 10000, 10); // calls grow every 10 seconds with parameter tick = 10
        }
        plantPlant(_plant) {
            this.plant = _plant; // get info from the other class
            this.market.decreaseSeedling(_plant.name); // one less seedling in your storage - wir haben kein Market mehr
        }
        // water is endless, so no decreasing
        waterPlant() {
            this.waterStock += 1; // was passiert hier?
        }
        dungPlant() {
            this.market.decreaseDung(); // one less dung in own storage - wir haben kein Market mehr
            this.dungStock += 1; // was passiert hier?
        }
        // nur der Preis soll auf das capital draufgerechnet werden, nicht die Pflanzen gesammelt
        cropPlant() {
            this.market.sellProduct(this.product.price); // was passiert hier? - wir haben kein Market mehr
            this.resetField(); // empties the field
        }
        pestFight() {
            this.market.decreasePesticid(); // decrease one in market bc you needed one - wir haben kein Market mehr
            this.pestAttack = false; // pest is gone
        }
        resetField() {
            this.plant = null;
            this.growthProzss = 0;
            this.pestAttack = false;
            this.pestTime = 0;
            this.waterStock = 0;
            this.waterNeed = 0;
            this.dungStock = 0;
            this.dungNeed = 0;
            this.maxCareTime = 60;
            this.currentCareTime = 0;
        }
    }
    garden.Field = Field;
})(garden || (garden = {}));
//# sourceMappingURL=Field.js.map
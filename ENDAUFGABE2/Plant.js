var garden;
(function (garden) {
    class Plant extends garden.Product {
        field;
        growthTime;
        growthProcess = 0;
        time = 10;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
        pestAttack;
        image;
        waterPlant() {
            //water plant
        }
        harvestPlant() {
            //empty field
            // ad Price
        }
        die() {
            //emptyField
        }
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map
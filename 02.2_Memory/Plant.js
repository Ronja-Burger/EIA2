"use strict";
var garden;
(function (garden) {
    class Plant {
        growthTime;
        waterNeed;
        dungNeed;
        maxCareTime = 60;
        grow(_growTime) {
            for (let index = 0; index < this.growthTime; index++) {
                // Bild in css manipulieren: 20 x 20px und bei jedem Durchgang + 10px
                // growthTime entspricht der Intervallzeit, die bei jedem Geüse unterschiedlich ist
            }
        }
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map
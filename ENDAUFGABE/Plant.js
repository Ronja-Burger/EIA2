"use strict";
var farm;
(function (farm) {
    class Plant {
        name;
        growthTime;
        waterNeed;
        waterNeedTime = 30;
        dungNeed;
        dungNeedTime = 60;
    }
    farm.Plant = Plant;
})(farm || (farm = {}));
//# sourceMappingURL=Plant.js.map
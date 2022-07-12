"use strict";
var farm;
(function (farm) {
    class Salad extends farm.Plant {
        name = "Salad";
        growthTime = 90;
        waterNeed = 1;
        dungNeed = 1;
    }
    farm.Salad = Salad;
})(farm || (farm = {}));
//# sourceMappingURL=Salad.js.map
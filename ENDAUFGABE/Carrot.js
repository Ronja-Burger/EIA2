"use strict";
var farm;
(function (farm) {
    class Carrot extends farm.Plant {
        name = "Carrot";
        growthTime = 180;
        waterNeed = 3;
        dungNeed = 2;
    }
    farm.Carrot = Carrot;
})(farm || (farm = {}));
//# sourceMappingURL=Carrot.js.map
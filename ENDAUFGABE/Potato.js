"use strict";
var farm;
(function (farm) {
    class Potato extends farm.Plant {
        name = "Potato";
        growthTime = 120;
        waterNeed = 2;
        dungNeed = 1;
    }
    farm.Potato = Potato;
})(farm || (farm = {}));
//# sourceMappingURL=Potato.js.map
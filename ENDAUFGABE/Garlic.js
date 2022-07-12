"use strict";
var farm;
(function (farm) {
    class Garlic extends farm.Plant {
        name = "Garlic";
        growthTime = 300;
        waterNeed = 5;
        dungNeed = 3;
    }
    farm.Garlic = Garlic;
})(farm || (farm = {}));
//# sourceMappingURL=Garlic.js.map
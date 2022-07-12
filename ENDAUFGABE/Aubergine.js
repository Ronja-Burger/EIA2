"use strict";
var farm;
(function (farm) {
    class Aubergine extends farm.Plant {
        name = "Aubergine";
        growthTime = 240;
        waterNeed = 4;
        dungNeed = 3;
    }
    farm.Aubergine = Aubergine;
})(farm || (farm = {}));
//# sourceMappingURL=Aubergine.js.map
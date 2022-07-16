"use strict";
var garden;
(function (garden) {
    class Plant extends garden.Product {
        // Bilder bei drag duplizieren?
        field;
        growthTime;
        waterNeedTime = 60;
        dungNeedTime = 120;
        maxCareTime = 30;
        currentCareTime = 0;
        grow() {
            //Bildchen sollen größer werden
            if (this.plant == null)
                ;
            {
                return; // if no plant is planted end here
            }
            if (this.currentCareTime >= this.maxCareTime) {
                this.resetField();
                return; // no caretaking -> plant dies -> field empty again
            }
            //if all condition are meeted, plant grows and the need for water and dung rises
            if (this.waterNeed == this.waterStock && this.dungNeed == this.dungStock && !this.pestAttack) {
                if (this.plant.growthTime > this.growthProzss) { // if growthProzess is smaller than growthTime ...
                    this.growthProzss += _tick; // ... increase growthProzess by 10
                    this.waterNeedTime += _tick; // ... increase waterNeedTime by 10
                    this.dungNeedTime += _tick; // ... increase dungNeedTime by 10
                    //Icon auftauchen lassen im Zusatzfeld!
                    if (this.waterNeedTime >= this.waterNeedTime) { // if waterNeedTime is bigger than the waterNeedTime from this plant ...
                        this.waterNeedTime = 0; // ... the plant doesn't need water anymore and the counter starts again
                        //this.waterNeed += this.plant.waterNeed; // set waterNeed of plant to 0 again - brauchen wir nicht mehr?
                    }
                    //Icon auftauchen lassen im Zusatzfeld!
                    if (this.dungNeedTime >= this.dungNeedTime) { // if dungNeedTime is bigger than the dungNeedTime from this plant ... 
                        this.dungNeedTime = 0; // ... the plant doesn't need more dung and the counter starts again
                        //this.dungNeed += this.plant.dungNeed; // set dungNeed of plant to 0 again - brauchen wir nicht mehr?
                    }
                }
            }
            else {
                this.currentCareTime += _tick; // else the timer for to care for the plant increases
            }
        }
        waterPlant() {
            //Wasser dragOver?
        }
        dungPlant() {
            //Dünger dragOver?
        }
        cropPlant() {
            //Feld leer
            //capital + price -> capital auch als Eigenschaft?
        }
        die() {
            //Feld leer
            // extra Bildchen anzeigen?
        }
        fightPest() {
            // pesticide dragOver?
        }
    }
    garden.Plant = Plant;
})(garden || (garden = {}));
//# sourceMappingURL=Plant.js.map
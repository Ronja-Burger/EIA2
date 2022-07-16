namespace garden {

    export class Field extends Plant {

        plants: Plant;
        plant: Plant | null;
        hTMLDivElement: HTMLDivElement;
        growthProzss: number = 0;
        pestAttack: boolean;
        pestTime: number;
        waterStock: number;
        waterNeed: number;
        waterNeedTime: number = 0;
        dungStock: number;
        dungNeed: number;
        dungNeedTime: number = 0;
        maxCareTime: number = 60;
        currentCareTime: number = 0;

        constructor(_plants: Plant, _HTMLDivElement: HTMLDivElement) { // wozu brauchen wir Übergabeparameter?
            super();
            this.plants = _plants;
            this.hTMLDivElement = _HTMLDivElement;
            setInterval(this.grow, 10000, 10); // calls grow every 10 seconds with parameter tick = 10
        }

        

        plantPlant(_plant: Plant): void {
            this.plant = _plant; // get info from the other class
            this.market.decreaseSeedling(_plant.name); // one less seedling in your storage - wir haben kein Market mehr
        }

        // water is endless, so no decreasing
        waterPlant(): void {
            this.waterStock += 1; // was passiert hier?
        }

        dungPlant(): void {
            this.market.decreaseDung(); // one less dung in own storage - wir haben kein Market mehr
            this.dungStock += 1; // was passiert hier?
        }

        // nur der Preis soll auf das capital draufgerechnet werden, nicht die Pflanzen gesammelt
        cropPlant(): void {
            this.market.sellProduct(this.product.price); // was passiert hier? - wir haben kein Market mehr
            this.resetField(); // empties the field
        }

        pestFight(): void {
            this.market.decreasePesticid(); // decrease one in market bc you needed one - wir haben kein Market mehr
            this.pestAttack = false; // pest is gone
        }

        resetField(): void { // empties the field
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
}
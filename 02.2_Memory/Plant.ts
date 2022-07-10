namespace garden {
    export abstract class Plant {
        growthTime: number;
        waterNeed: number;
        dungNeed: number;
        maxCareTime: number = 60;

        grow(_growTime: number): void {
            for (let index: number = 0; index < this.growthTime; index++) {
                // Bild in css manipulieren: 20 x 20px und bei jedem Durchgang + 10px
                // growthTime entspricht der Intervallzeit, die bei jedem Geüse unterschiedlich ist
            }
        }
    }
}
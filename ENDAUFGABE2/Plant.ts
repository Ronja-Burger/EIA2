namespace garden {

    export abstract class Plant extends Product {

        field: HTMLDivElement;
        growthTime: number;
        growthProcess: number = 0;
        time: number = 10;
        waterNeedTime: number = 60;
        dungNeedTime: number = 120;
        maxCareTime: number = 30;
        currentCareTime: number = 0;
        pestAttack: boolean;
        image: HTMLImageElement;

        

        waterPlant(): void {
            //water plant
        }
    
        harvestPlant(): void {
            //empty field
            // ad Price
        }

        die(): void {
            //emptyField
        }
    }
}
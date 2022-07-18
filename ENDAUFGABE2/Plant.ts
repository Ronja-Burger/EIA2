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

        grow(): void {
            console.log("grow");
        }

        waterPlant(): void { };
        dungPlant(): void { };
        cropPlant(): void { };
        die(): void { };
        fightPest(): void { };
    }
}
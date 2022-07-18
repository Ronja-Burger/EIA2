namespace garden {

    export abstract class Plant extends Product {

        field: HTMLDivElement;
        waterNeedTime: number = 60;
        dungNeedTime: number = 120;
        maxCareTime: number = 30;
        currentCareTime: number = 0;
        pestAttack: boolean;
        image: HTMLImageElement;
        sellPrice: number;

        //constructor (_sellPrice: number) { super(); this.sellPrice = _sellPrice;}

        

        waterPlant(): void {
            //water plant
        }
    

        die(): void {
            //emptyField
        }
    }
}
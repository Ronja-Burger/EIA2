namespace garden {

    export abstract class Plant extends class Product {

    name: string;
    growthTime: number;
    waterNeed: number;
    waterNeedTime: number = 30;
    dungNeed: number;
    dungNeedTime: number = 60;
    } 
}
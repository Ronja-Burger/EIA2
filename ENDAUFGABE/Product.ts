namespace farm {

    export class Product {

        name: string;
        currentPrice: number; // das Gleiche wie MaxPrice?
        maxPrice: number = priceVariation; // 3 oder 5 - warum findet der das nicht?
        minPrice: number = 1; // wie greifen wir hier den eingestellten maximumpreis ab?
        amount: number = 0;

        constructor(name: string, _minPrice: number, _maxPrice: number) {
            this.name = name;
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
        }

        changePrice(): void {
            this.currentPrice = Math.floor(Math.random() * (this.minPrice - this.maxPrice)); // ändert alle Preise auf einmal?
        }

    }
}

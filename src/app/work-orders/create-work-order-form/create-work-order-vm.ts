export class CreateWorkOrderVm {
    public inventoryItemId: number;
    public quantity: number;
    public routingId: number;

    constructor() {
        this.quantity = 1;
    }
}
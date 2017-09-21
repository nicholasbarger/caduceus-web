import { BillOfMaterial } from '../manufacturing/bill-of-material';
import { DomainModel } from '../domain-model';
import { InventoryItem } from '../inventory/inventory-item';
import { Routing } from '../manufacturing/routing';
import { WorkOrderStatus } from './work-order-status';
import { WorkOrderStep } from './work-order-step';
import { UnitOfMeasure } from '../unit-of-measure';

export class WorkOrder extends DomainModel{
    constructor(
        public billOfMaterialId: number,
        public created: Date,
        public dueDate: Date,
        public id: number,
        public inventoryItemId: number,
        public isActive: boolean,
        public quantity: number,
        public routingId: number,
        public statusId: number,
        public unitOfMeasureId: number,

        public modified: Date = null,
        public obfuscatedId: string = null,
    
        public billOfMaterial: BillOfMaterial = null,
        public inventoryItem: InventoryItem = null,
        public routing: Routing = null,
        public status: WorkOrderStatus = null,
        public steps: WorkOrderStep[] = null,
        public unitOfMeasure: UnitOfMeasure = null) {
            super(id, obfuscatedId, isActive, created, modified);
    }
}
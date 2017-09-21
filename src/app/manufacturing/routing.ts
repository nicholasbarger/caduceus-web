import { InventoryItem } from '../inventory/inventory-item';
import { RoutingStep } from './routing-step';

export class Routing {
    constructor(
        public code: string,
        
        public steps: RoutingStep[]) {
    }
}
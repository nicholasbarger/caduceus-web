import { AppUser } from '../app-user';
import { WorkOrder } from '../work-orders/work-order';

export class LoggedWork {
    constructor(
        public clockIn: Date = null,
        public clockOut: Date = null,
        public description: string,
        public workOrderId: number,
        public user: AppUser,
        public workOrder: WorkOrder) {
    }
}
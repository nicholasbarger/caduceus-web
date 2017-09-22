import { Injectable } from '@angular/core';

import { WorkOrder } from './work-order';

@Injectable()
export class WorkOrderService {

  constructor() { }

  create(workOrder: WorkOrder): Promise<WorkOrder> {
    workOrder.id = 1;
    return Promise.resolve(workOrder);
  }

  getCollection(filter: any): Promise<WorkOrder[]> {
    // todo: add data from filter
    var fakeWorkOrders: WorkOrder[] = [
      new WorkOrder(1, new Date(), new Date(), 1000, 1, true, 100, 1, 1, 1),
      new WorkOrder(2, new Date(), new Date(), 1001, 2, true, 1000, 2, 2, 2)
    ];
    return Promise.resolve(fakeWorkOrders);
  }

  getSingle(id: number): Promise<WorkOrder> {
    return Promise.resolve(new WorkOrder(1, new Date(), new Date(), 1000, 1, true, 100, 1, 1, 1));
  }

  update(workOrder: WorkOrder): Promise<WorkOrder> {
    return Promise.resolve(workOrder);
  }
}

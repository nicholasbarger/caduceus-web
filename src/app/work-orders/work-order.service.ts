import { Injectable } from '@angular/core';

import { WorkOrder } from './work-order';
import { WorkOrderDetail } from './work-order-detail';
import { WorkOrderListItem } from './work-order-list-item';

@Injectable()
export class WorkOrderService {

  constructor() { }

  create(workOrder: WorkOrder): Promise<WorkOrder> {
    workOrder.id = 1;
    return Promise.resolve(workOrder);
  }

  getCollection(filter: any): Promise<WorkOrderListItem[]> {
    // todo: add data from filter
    var fakeWorkOrders: WorkOrderListItem[] = [
      new WorkOrderListItem(1, 'DaisyCutter', 300, 'Cans', 'In Progress', new Date()),
      new WorkOrderListItem(2, 'Vallejo', 150, 'Bottles', 'Open', new Date())
    ];
    return Promise.resolve(fakeWorkOrders);
  }

  getSingle(id: number): Promise<WorkOrderDetail> {
    var workOrder = new WorkOrderDetail();
    workOrder.billOfMaterial = 'DaisyCutter Recipe #2';
    workOrder.inventoryItem = 'DaisyCutter';
    workOrder.quantity = 300;
    workOrder.routing = 'DaisyCutter Process #2';
    workOrder.unitOfMeasure = 'Liters';
    
    return Promise.resolve(workOrder);
  }

  update(workOrder: WorkOrder): Promise<WorkOrder> {
    return Promise.resolve(workOrder);
  }
}

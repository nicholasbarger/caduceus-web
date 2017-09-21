import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../work-order';
import { WorkOrderService } from '../work-order.service';

@Component({
  selector: 'work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.css']
})
export class WorkOrderListComponent implements OnInit {
  workOrders: WorkOrder[];

  constructor(public workOrderService: WorkOrderService) { }

  ngOnInit() {
    this.workOrderService.getCollection(null).then(data => this.workOrders = data);
  }

  select(workOrder: WorkOrder) {
    console.log(workOrder.id);
  }

}

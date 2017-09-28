import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { WorkOrderService } from '../work-order.service';
import { WorkOrderDetail } from './work-order-detail';

@Component({
  selector: 'work-order-detail',
  templateUrl: './work-order-detail.component.html',
  styleUrls: ['./work-order-detail.component.css']
})
export class WorkOrderDetailComponent implements OnInit {

  @Input() id: number;
  model: WorkOrderDetail = null;

  constructor(public workOrderService: WorkOrderService) { 
  }

  ngOnInit() {
    this.workOrderService.getSingle(this.id).then(data => this.model = data);
  }

  ngOnChanges(changes: any) {
    this.workOrderService.getSingle(this.id).then(data => this.model = data);
  }

}

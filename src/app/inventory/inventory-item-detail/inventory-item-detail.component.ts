import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import { InventoryItemDetail } from './inventory-item-detail';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.css']
})
export class InventoryItemDetailComponent implements OnInit {
  @Input() id: number;
  model: InventoryItemDetail = null;

  constructor(public service: InventoryItemService) { }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

}

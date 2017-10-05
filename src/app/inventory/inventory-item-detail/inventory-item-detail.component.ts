import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import { InventoryItemDetail } from './inventory-item-detail';
import { RoutingListItem } from '../../manufacturing/routing-list/routing-list-item';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.css']
})
export class InventoryItemDetailComponent implements OnInit {
  @Input() id: number;
  model: InventoryItemDetail = null;
  isCreateRoutingVisible: boolean = false;
  isRoutingDetailVisible: boolean = false;
  selectedRoutingId: number;

  constructor(public service: InventoryItemService) { }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

  onRoutingSelected(routing: RoutingListItem): void {
    this.selectedRoutingId = routing.id;
    this.isRoutingDetailVisible = true;
  }

  toggleCreateRoutingVisibility(): void {
    this.isCreateRoutingVisible = !this.isCreateRoutingVisible;
  }

  toggleRoutingDetailVisibilty(): void {
    this.isRoutingDetailVisible = !this.isRoutingDetailVisible;
  }
}

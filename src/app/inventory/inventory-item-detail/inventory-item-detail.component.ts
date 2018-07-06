import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { InventoryItemService } from '../inventory-item.service';
import { InventoryItemDetail } from './inventory-item-detail';
import { RoutingListItem } from '../../manufacturing/routing-list/routing-list-item';
import { VendorListItem } from '../../purchasing/vendors/vendor-list/vendor-list-item';
import { WorkOrderListItem } from '../../work-orders/work-order-list/work-order-list-item';
import { InventoryStockListItem } from '../inventory-stock-list/inventory-stock-list-item';

@Component({
  selector: 'inventory-item-detail',
  templateUrl: './inventory-item-detail.component.html',
  styleUrls: ['./inventory-item-detail.component.css']
})
export class InventoryItemDetailComponent implements OnInit {
  @Input() id: number;
  model: InventoryItemDetail = null;
  isCreateRoutingVisible: boolean = false;
  isCreateVendorVisible: boolean = false;
  isCreateWorkOrderVisible: boolean = false;
  isInventoryStockDetailVisible: boolean = false;
  isRoutingDetailVisible: boolean = false;
  isVendorDetailVisible: boolean = false;
  isWorkOrderDetailVisible: boolean = false;
  selectedInventoryStockId: number;
  selectedRoutingId: number;
  selectedVendorId: number;
  selectedWorkOrderId: number;

  constructor(private service: InventoryItemService) { }

  ngOnInit() {
    this.service.getSingle(this.id).then(data => this.model = data);
  }

  onInventoryStockSelected(stock: InventoryStockListItem): void {
    this.selectedInventoryStockId = stock.id;
    this.isInventoryStockDetailVisible = true;
  }

  onRoutingSelected(routing: RoutingListItem): void {
    this.selectedRoutingId = routing.id;
    this.isRoutingDetailVisible = true;
  }

  onVendorSelected(vendor: VendorListItem): void {
    this.selectedVendorId = vendor.id;
    this.isVendorDetailVisible = true;
  }

  onWorkOrderSelected(workOrder: WorkOrderListItem): void {
    this.selectedWorkOrderId = workOrder.id;
    this.isWorkOrderDetailVisible = true;
  }

  toggleCreateRoutingVisibility(): void {
    this.isCreateRoutingVisible = !this.isCreateRoutingVisible;
  }

  toggleCreateWorkOrderVisibility(): void {
    this.isCreateWorkOrderVisible = !this.isCreateWorkOrderVisible;
  }

  toggleCreateVendorVisibility(): void {
    this.isCreateVendorVisible = !this.isCreateVendorVisible;
  }

  toggleInventoryStockDetailVisibility(): void {
    this.isInventoryStockDetailVisible = !this.isInventoryStockDetailVisible;
  }

  toggleRoutingDetailVisibility(): void {
    this.isRoutingDetailVisible = !this.isRoutingDetailVisible;
  }

  toggleVendorDetailVisibility(): void {
    this.isVendorDetailVisible = !this.isVendorDetailVisible;
  }

  toggleWorkOrderDetailVisibility(): void {
    this.isWorkOrderDetailVisible = !this.isWorkOrderDetailVisible;
  }
}

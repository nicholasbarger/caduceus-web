import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryItemDetailComponent } from './inventory-item-detail.component';
import { FormsModule } from '@angular/forms';
import { VendorListModule } from '../../../purchasing/vendors/vendor-list/vendor-list.module';
import { WorkOrderDetailModule } from '../../../work-orders/work-order-detail/work-order-detail.module';
import { AppCommonModule } from '../../../common/app-common.module';
import { CreateVendorPageModule } from '../../../purchasing/vendors/create-vendor-page/create-vendor-page.module';
import { VendorDetailModule } from '../../../purchasing/vendors/vendor-detail/vendor-detail.module';
import { InventoryItemListModule } from '../inventory-item-list/inventory-item-list.module';
import { RoutingListModule } from '../../../manufacturing/routing-list/routing-list.module';
import { RoutingDetailPageModule } from '../../../manufacturing/routing-detail-page/routing-detail-page.module';
import { CreateWorkOrderPageModule } from '../../../work-orders/create-work-order-page/create-work-order-page.module';
import { InventoryStockModule } from '../../inventory-stock/inventory-stock.module';
import { WorkOrderListModule } from '../../../work-orders/work-order-list/work-order-list.module';
import { CreateRoutingPageModule } from '../../../manufacturing/create-routing-page/create-routing-page.module';

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreateRoutingPageModule,
    CreateVendorPageModule,
    CreateWorkOrderPageModule,
    FormsModule,
    InventoryItemListModule,
    InventoryStockModule,
    RoutingDetailPageModule,
    RoutingListModule,
    VendorDetailModule,
    VendorListModule,
    WorkOrderDetailModule,
    WorkOrderListModule
  ],
  declarations: [
    InventoryItemDetailComponent
  ],
  exports: [
    InventoryItemDetailComponent
  ]
})
export class InventoryItemDetailModule { }

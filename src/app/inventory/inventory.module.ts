import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InventoryLocationListComponent } from './inventory-location-list/inventory-location-list.component';
import { InventoryStockListComponent } from './inventory-stock-list/inventory-stock-list.component';
import { InventoryStockDetailComponent } from './inventory-stock-detail/inventory-stock-detail.component';
import { InventoryLocationDetailComponent } from './inventory-location-detail/inventory-location-detail.component';
import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { InventoryItemDetailComponent } from './inventory-item-detail/inventory-item-detail.component';
import { InventoryItemsPageComponent } from './items-page/items-page.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { CreateInventoryLocationFormComponent } from './create-inventory-location-form/create-inventory-location-form.component';
import { CreateInventoryLocationPageComponent } from './create-inventory-location-page/create-inventory-location-page.component';
import { ItemListComponent } from './item-list/item-list.component';
import { InventorySubLocationListComponent } from './inventory-location-list/inventory-sub-location-list.component';
import { InventoryLocationsPageComponent } from './inventory-locations-page/inventory-locations-page.component';
import { InventoryItemService } from './inventory-item.service';
import { InventoryLocationService } from './inventory-location.service';
import { InventoryStockService } from './inventory-stock.service';
import { UnitOfMeasureSelectListComponent } from './unit-of-measure-select-list/unit-of-measure-select-list.component';
import { UnitOfMeasureService } from './unit-of-measure.service';
import { AppCommonModule } from '../common/app-common.module';
import { VendorDetailModule } from '../purchasing/vendors/vendor-detail/vendor-detail.module';
import { RoutingDetailPageModule } from '../manufacturing/routing-detail-page/routing-detail-page.module';
import { VendorListModule } from '../purchasing/vendors/vendor-list/vendor-list.module';
import { WorkOrderDetailModule } from '../work-orders/work-order-detail/work-order-detail.module';
import { CreateVendorPageModule } from '../purchasing/vendors/create-vendor-page/create-vendor-page.module';
import { RoutingListModule } from '../manufacturing/routing-list/routing-list.module';
import { WorkOrderListModule } from '../work-orders/work-order-list/work-order-list.module';
import { CreateRoutingPageModule } from '../manufacturing/create-routing-page/create-routing-page.module';
import { CreateWorkOrderPageModule } from '../work-orders/create-work-order-page/create-work-order-page.module';
import { InventoryItemSelectListModule } from './inventory-item-select-list/inventory-item-select-list.module';

const appRoutes: Routes = [
  { path: 'inventory', component: InventoryItemsPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent },
  { path: 'inventory/items/:id', component: InventoryItemsPageComponent },
  { path: 'inventory/items/create', component: CreateInventoryItemPageComponent },
  { path: 'inventory/locations', component: InventoryLocationsPageComponent },
  { path: 'inventory/stock', component: StockPageComponent },
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    CreateRoutingPageModule,
    CreateVendorPageModule,
    CreateWorkOrderPageModule,
    FormsModule,
    InventoryItemSelectListModule,
    RoutingDetailPageModule,
    RoutingListModule,
    VendorDetailModule,
    VendorListModule,
    WorkOrderDetailModule,
    WorkOrderListModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    InventoryLocationListComponent,
    InventoryStockListComponent,
    InventoryStockDetailComponent,
    InventoryLocationDetailComponent,
    CreateInventoryItemPageComponent, 
    CreateItemFormComponent,
    InventoryItemDetailComponent,
    InventoryItemsPageComponent, 
    InventoryLocationsPageComponent, 
    InventorySubLocationListComponent,
    ItemListComponent,
    CreateInventoryLocationPageComponent,
    CreateInventoryLocationFormComponent,
    StockPageComponent,
    UnitOfMeasureSelectListComponent
  ],
  providers: [
    InventoryItemService,
    InventoryLocationService,
    InventoryStockService,
    UnitOfMeasureService
  ],
  exports: [
  ]
})
export class InventoryModule { }

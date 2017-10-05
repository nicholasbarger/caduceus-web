import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from './common/app-common.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { CalendarModule } from 'ap-angular2-fullcalendar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MarketingModule } from './marketing/marketing.module';

import { AppComponent } from './app.component';
import { CreateInventoryItemPageComponent } from './inventory/create-item-page/create-item-page.component';
import { CreateItemFormComponent } from './inventory/create-item-form/create-item-form.component';
import { CreateRoutingFormComponent } from './manufacturing/create-routing-form/create-routing-form.component';
import { CreateRoutingPageComponent } from './manufacturing/create-routing-page/create-routing-page.component';
import { CreateWorkOrderPageComponent } from './work-orders/create-work-order-page/create-work-order-page.component';
import { CreateWorkOrderFormComponent } from './work-orders/create-work-order-form/create-work-order-form.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { ItemListComponent } from './inventory/item-list/item-list.component';
import { InventoryItemsPageComponent } from './inventory/items-page/items-page.component';
import { InventoryItemService } from './inventory/inventory-item.service';
import { InventoryItemSelectListComponent } from './inventory/inventory-item-select-list/inventory-item-select-list.component';
import { InventoryItemDetailComponent } from './inventory/inventory-item-detail/inventory-item-detail.component';
import { InventoryLocationListComponent } from './inventory/inventory-location-list/inventory-location-list.component';
import { InventoryLocationsPageComponent } from './inventory/inventory-locations-page/inventory-locations-page.component';
import { InventoryLocationService } from './inventory/inventory-location.service';
import { InventoryStockListComponent } from './inventory/inventory-stock-list/inventory-stock-list.component';
import { InventoryStockService } from './inventory/inventory-stock.service';
import { InventorySubLocationListComponent } from './inventory/inventory-location-list/inventory-sub-location-list.component';
import { MyWorkPageComponent } from './dashboard/my-work-page/my-work-page.component';
import { NotFoundPageComponent } from './common/not-found-page/not-found-page.component';
import { RoutingListComponent } from './manufacturing/routing-list/routing-list.component';
import { RoutingListPageComponent } from './manufacturing/routing-list-page/routing-list-page.component';
import { RoutingSelectListComponent } from './manufacturing/routing-select-list/routing-select-list.component';
import { RoutingService } from './manufacturing/routing.service';
import { StockPageComponent } from './inventory/stock-page/stock-page.component';
import { UnitOfMeasureSelectListComponent } from './inventory/unit-of-measure-select-list/unit-of-measure-select-list.component';
import { UnitOfMeasureService } from './inventory/unit-of-measure.service';
import { WorkOrderListComponent } from './work-orders/work-order-list/work-order-list.component';
import { WorkOrderDetailComponent } from './work-orders/work-order-detail/work-order-detail.component';
import { WorkOrderService } from './work-orders/work-order.service';
import { WorkOrdersCalendarPageComponent } from './work-orders/work-orders-calendar-page/work-orders-calendar-page.component';
import { WorkOrdersPageComponent } from './work-orders/work-orders-page/work-orders-page.component';
import { WorkOrderWorkflowComponent } from './work-orders/work-order-workflow/work-order-workflow.component';
import { InventoryStockDetailComponent } from './inventory/inventory-stock-detail/inventory-stock-detail.component';
import { RoutingDetailPageComponent } from './manufacturing/routing-detail-page/routing-detail-page.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'inventory', component: InventoryItemsPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent },
  { path: 'inventory/items/create', component: CreateInventoryItemPageComponent },
  { path: 'inventory/locations', component: InventoryLocationsPageComponent },
  { path: 'inventory/stock', component: StockPageComponent },
  { path: 'my-work', component: MyWorkPageComponent },
  { path: 'work-orders', component: WorkOrdersPageComponent },
  { path: 'work-orders/calendar', component: WorkOrdersCalendarPageComponent },
  { path: 'work-orders/create', component: CreateWorkOrderPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    AccountModule,
    AdminModule,
    AppCommonModule,
    CalendarModule,
    ChartsModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MarketingModule,
    RouterModule.forRoot(appRoutes),

      // must be last because of wildcard catch all in routes
  ],
  declarations: [
    AppComponent,
    CreateInventoryItemPageComponent, 
    CreateItemFormComponent,
    CreateRoutingFormComponent,
    CreateRoutingPageComponent,
    CreateWorkOrderPageComponent,
    CreateWorkOrderFormComponent,
    DashboardPageComponent,
    InventoryItemDetailComponent,
    InventoryItemsPageComponent, 
    InventoryItemSelectListComponent, 
    InventoryLocationsPageComponent, 
    InventorySubLocationListComponent,
    ItemListComponent,
    MyWorkPageComponent,
    NotFoundPageComponent,
    RoutingListComponent,  
    RoutingListPageComponent,
    RoutingSelectListComponent,
    StockPageComponent,
    UnitOfMeasureSelectListComponent,
    WorkOrdersCalendarPageComponent,
    WorkOrdersPageComponent,
    WorkOrderListComponent,
    WorkOrderDetailComponent,
    WorkOrderWorkflowComponent,
    InventoryLocationListComponent,
    InventoryStockListComponent,
    InventoryStockDetailComponent,
    RoutingDetailPageComponent,
  ],
  providers: [
    InventoryItemService,
    InventoryLocationService,
    InventoryStockService,
    RoutingService,
    UnitOfMeasureService,
    WorkOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

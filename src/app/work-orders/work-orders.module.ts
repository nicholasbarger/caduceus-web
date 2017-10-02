import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';
import { InventoryModule } from '../inventory/inventory.module'
import { ManufacturingModule } from '../manufacturing/manufacturing.module';

import { CreateWorkOrderPageComponent } from './create-work-order-page/create-work-order-page.component';
import { CreateWorkOrderFormComponent } from './create-work-order-form/create-work-order-form.component';
import { WorkOrdersPageComponent } from './work-orders-page/work-orders-page.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderDetailComponent } from './work-order-detail/work-order-detail.component';

import { WorkOrderService } from './work-order.service';
import { WorkOrdersCalendarPageComponent } from './work-orders-calendar-page/work-orders-calendar-page.component';

const appRoutes: Routes = [
  { path: 'work-orders', component: WorkOrdersPageComponent },
  { path: 'work-orders/calendar', component: WorkOrdersCalendarPageComponent },
  { path: 'work-orders/create', component: CreateWorkOrderPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,
    InventoryModule,
    ManufacturingModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateWorkOrderPageComponent,
    CreateWorkOrderFormComponent,
    WorkOrdersPageComponent,
    WorkOrderListComponent,
    WorkOrderDetailComponent,
    WorkOrdersCalendarPageComponent
  ],
  providers: [
    WorkOrderService
  ],
  exports: [
    WorkOrderListComponent
  ]
})
export class WorkOrdersModule { }

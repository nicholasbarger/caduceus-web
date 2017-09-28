import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { CommonUiModule } from '../common-ui/common-ui.module';
import { InventoryModule } from '../inventory/inventory.module'

import { CreateWorkOrderPageComponent } from './create-work-order-page/create-work-order-page.component';
import { CreateWorkOrderFormComponent } from './create-work-order-form/create-work-order-form.component';
import { WorkOrdersPageComponent } from './work-orders-page/work-orders-page.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { WorkOrderDetailComponent } from './work-order-detail/work-order-detail.component';

import { WorkOrderService } from './work-order.service';

const appRoutes: Routes = [
  { path: 'work-orders/list', component: WorkOrdersPageComponent },
  { path: 'work-orders/create', component: CreateWorkOrderPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    FormsModule,
    HttpModule,
    InventoryModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateWorkOrderPageComponent,
    CreateWorkOrderFormComponent,
    WorkOrdersPageComponent,
    WorkOrderListComponent,
    WorkOrderDetailComponent
  ],
  providers: [
    WorkOrderService
  ]
})
export class WorkOrdersModule { }

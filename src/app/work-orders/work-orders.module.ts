import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { WorkOrdersPageComponent } from './work-orders-page/work-orders-page.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { CreateWorkOrderPageComponent } from './create-work-order-page/create-work-order-page.component';
import { CreateWorkOrderFormComponent } from './create-work-order-form/create-work-order-form.component';

import { WorkOrderService } from './work-order.service';

const appRoutes: Routes = [
  { path: 'work-orders/list', component: WorkOrdersPageComponent },
  { path: 'work-orders/create', component: CreateWorkOrderPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateWorkOrderPageComponent,
    CreateWorkOrderFormComponent,
    WorkOrdersPageComponent,
    WorkOrderListComponent
  ],
  providers: [
    WorkOrderService
  ]
})
export class WorkOrdersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';
import { InventoryModule } from '../inventory/inventory.module'

import { CreateRoutingFormComponent } from './/create-routing-form/create-routing-form.component';
import { CreateRoutingPageComponent } from './create-routing-page/create-routing-page.component';
import { RoutingListComponent } from './routing-list/routing-list.component';
import { RoutingListPageComponent } from './routing-list-page/routing-list-page.component';
import { RoutingSelectListComponent } from './routing-select-list/routing-select-list.component';

import { RoutingService } from './routing.service';

const appRoutes: Routes = [
  { path: 'routing/list', component: RoutingListPageComponent },
  { path: 'routing/create', component: CreateRoutingPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,
    InventoryModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateRoutingFormComponent,
    CreateRoutingPageComponent,
    RoutingListComponent,  
    RoutingListPageComponent,
    RoutingSelectListComponent
  ],
  exports: [
    RoutingSelectListComponent
  ],
  providers: [
    RoutingService
  ]
})
export class ManufacturingModule { }

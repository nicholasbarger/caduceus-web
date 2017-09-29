import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';

import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { InventoryItemsPageComponent } from './items-page/items-page.component';
import { InventoryItemService } from './inventory-item.service';
import { InventoryItemSelectListComponent } from './inventory-item-select-list/inventory-item-select-list.component';
import { InventoryItemDetailComponent } from './inventory-item-detail/inventory-item-detail.component';
import { InventoryLocationsPageComponent } from './inventory-locations-page/inventory-locations-page.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { UnitOfMeasureSelectListComponent } from './unit-of-measure-select-list/unit-of-measure-select-list.component';
import { UnitOfMeasureService } from './unit-of-measure.service';

const appRoutes: Routes = [
  { path: 'inventory', component: InventoryItemsPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent },
  { path: 'inventory/items/create', component: CreateInventoryItemPageComponent },
  { path: 'inventory/locations', component: InventoryLocationsPageComponent },
  { path: 'inventory/stock', component: StockPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateInventoryItemPageComponent, 
    CreateItemFormComponent,
    InventoryItemDetailComponent,
    InventoryItemsPageComponent, 
    InventoryItemSelectListComponent, 
    InventoryLocationsPageComponent, 
    ItemListComponent,
    StockPageComponent,
    UnitOfMeasureSelectListComponent
  ],
  exports: [
    InventoryItemSelectListComponent
  ],
  providers: [
    InventoryItemService,
    UnitOfMeasureService
  ]
})
export class InventoryModule { }

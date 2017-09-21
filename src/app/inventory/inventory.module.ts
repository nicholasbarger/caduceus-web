import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { InventoryItemsPageComponent } from './items-page/items-page.component';
import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';

import { InventoryItemService } from './inventory-item.service';

const appRoutes: Routes = [
  { path: 'inventory/items/list', component: InventoryItemsPageComponent },
  { path: 'inventory/items/create', component: CreateInventoryItemPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ItemListComponent,
    CreateItemFormComponent,
    InventoryItemsPageComponent, 
    CreateInventoryItemPageComponent
  ],
  exports: [
    CreateInventoryItemPageComponent,
    InventoryItemsPageComponent
  ],
  providers: [
    InventoryItemService
  ]
})
export class InventoryModule { }

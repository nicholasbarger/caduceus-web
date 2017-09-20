import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ItemListComponent } from './item-list/item-list.component';
import { CreateItemFormComponent } from './create-item-form/create-item-form.component';
import { InventoryItemsPageComponent } from './items-page/items-page.component';
import { CreateInventoryItemPageComponent } from './create-item-page/create-item-page.component';

import { InventoryItemService } from './inventory-item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InventoryLocationsPageComponent } from './inventory-locations-page/inventory-locations-page.component';
import { CreateInventoryLocationFormComponent } from './create-inventory-location-form/create-inventory-location-form.component';
import { CreateInventoryLocationPageComponent } from './create-inventory-location-page/create-inventory-location-page.component';
import { InventorySubLocationListComponent } from './inventory-location-list/inventory-sub-location-list.component';
import { InventoryLocationDetailComponent } from './inventory-location-detail/inventory-location-detail.component';
import { InventoryLocationListComponent } from './inventory-location-list/inventory-location-list.component';
import { AppCommonModule } from '../../common/app-common.module';

const appRoutes: Routes = [
  { path: 'inventory/locations', component: InventoryLocationsPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    InventoryLocationListComponent,
    InventoryLocationDetailComponent,
    InventoryLocationsPageComponent, 
    InventorySubLocationListComponent,
    CreateInventoryLocationPageComponent,
    CreateInventoryLocationFormComponent
  ]
})
export class InventoryLocationsModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountModule } from './account/account.module';
import { InventoryModule } from './inventory/inventory.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './account/login-page/login-page.component';
import { RegistrationPageComponent } from './account/registration-page/registration-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { InventoryItemsPageComponent } from './inventory/items-page/items-page.component';
import { CreateInventoryItemPageComponent } from './inventory/create-item-page/create-item-page.component';
import { WorkOrdersPageComponent } from './work-orders/work-orders-page/work-orders-page.component';
import { WorkOrderListComponent } from './work-orders/work-order-list/work-order-list.component';
import { CreateWorkOrderFormComponent } from './work-orders/create-work-order-form/create-work-order-form.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'inventory/items', component: InventoryItemsPageComponent },
  { path: 'inventory/create-item', component: CreateInventoryItemPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    WorkOrdersPageComponent,
    WorkOrderListComponent,
    CreateWorkOrderFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    InventoryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

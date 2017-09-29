import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from './common/app-common.module';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { InventoryModule } from './inventory/inventory.module';
import { ManufacturingModule } from './manufacturing/manufacturing.module';
import { MarketingModule } from './marketing/marketing.module';
import { AdminModule } from './admin/admin.module';
import { WorkOrdersModule } from './work-orders/work-orders.module';

import { AppComponent } from './app.component';

const appRoutes: Routes = [];

@NgModule({
  imports: [
    AccountModule,
    AdminModule,
    AppCommonModule,
    DashboardModule,
    BrowserModule,
    FormsModule,
    InventoryModule,
    ManufacturingModule,
    WorkOrdersModule,
    RouterModule.forRoot(appRoutes),

    MarketingModule  // must be last because of wildcard catch all in routes
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

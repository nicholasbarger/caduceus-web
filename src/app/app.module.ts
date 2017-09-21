import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountModule } from './account/account.module';
import { InventoryModule } from './inventory/inventory.module';
import { WorkOrdersModule } from './work-orders/work-orders.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './account/login-page/login-page.component';
import { RegistrationPageComponent } from './account/registration-page/registration-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { NavigationComponent } from './navigation/navigation.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'features', component: FeaturesPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'signup', component: RegistrationPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    NavigationComponent,
    FeaturesPageComponent,
    PricingPageComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    InventoryModule,
    WorkOrdersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

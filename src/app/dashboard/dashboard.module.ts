import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MyWorkPageComponent } from './my-work-page/my-work-page.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'my-work', component: MyWorkPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    ChartsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    DashboardPageComponent,
    MyWorkPageComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class DashboardModule { }


  
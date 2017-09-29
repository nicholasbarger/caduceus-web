import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppCommonModule } from '../common/app-common.module';

import { SettingsPageComponent } from './settings-page/settings-page.component';

const appRoutes: Routes = [
  { path: 'settings', component: SettingsPageComponent }
];

@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    SettingsPageComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class AdminModule { }
  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

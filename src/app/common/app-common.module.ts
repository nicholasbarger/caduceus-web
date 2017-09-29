import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationComponent } from './navigation/navigation.component'
import { SelectListComponent } from './select-list/select-list.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NavigationComponent,
    SelectListComponent,
    SidePanelComponent
  ],
  exports: [
    NavigationComponent,
    SelectListComponent,
    SidePanelComponent
  ]
})
export class AppCommonModule { }

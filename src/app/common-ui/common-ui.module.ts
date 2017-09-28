import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectListComponent } from './select-list/select-list.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SelectListComponent,
    SidePanelComponent
  ],
  exports: [
    SelectListComponent,
    SidePanelComponent
  ]
})
export class CommonUiModule { }

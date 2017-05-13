import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdToolbarModule, MdGridListModule } from '@angular/material';

@NgModule({
  imports: [FlexLayoutModule, MdButtonModule, MdToolbarModule, MdGridListModule],
  exports: [FlexLayoutModule, MdButtonModule, MdToolbarModule, MdGridListModule],
  declarations: []
})
export class MaterialModule { }

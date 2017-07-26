import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule,MdButtonToggleModule,MdInputModule,MdCardModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdButtonToggleModule,MdInputModule,MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule,MdButtonToggleModule,MdInputModule,MdCardModule],
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { MaterialsModule } from '../materials.module';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule
  ],
  exports:[NavComponent,FlexLayoutModule]
})
export class CoreModule { }

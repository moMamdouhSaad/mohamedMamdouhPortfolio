import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule
      ],
      exports:[MatToolbarModule,MatSidenavModule,MatButtonModule]
})
export class MaterialsModule{}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { MaterialsModule } from '../materials.module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './loader-interceptor.service';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    RouterModule
  ],
  exports:[NavComponent,FlexLayoutModule],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }

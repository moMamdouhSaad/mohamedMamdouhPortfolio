import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { PagesRoutingModule } from './pages.routing.module';
import { HomeComponent } from '../pages/views/home/home.component';
import { AboutComponent } from '../pages/views/about/about.component';
import { PortofolioComponent } from '../pages/views/portofolio/portofolio.component';
import { ContactComponent } from '../pages/views/contact/contact.component';
import { MaterialsModule } from '../materials.module';



@NgModule({
  declarations: [PagesContainerComponent, HomeComponent, AboutComponent, PortofolioComponent, ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialsModule
  ],
  exports:[PagesContainerComponent,PagesRoutingModule]
})
export class PagesModule { }

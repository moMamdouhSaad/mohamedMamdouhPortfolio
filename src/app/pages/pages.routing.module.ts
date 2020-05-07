import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';
import { ProjectContainerComponent } from './project-container/project-container.component';
import { AboutComponent } from './views/about/about.component';
import { PortofolioComponent } from './views/portofolio/portofolio.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes =
    [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"pages-container", component:PagesContainerComponent},
    {path:"project/:id", component: ProjectContainerComponent,  data: {animation: 'Project'}},
    {path: 'home', component: HomeComponent, data: {animation: 'Home'} },
    {path: "about", component: AboutComponent, data: {animation: 'About'}},
    {path: "portofolio", component: PortofolioComponent, data: {animation: 'Portofolio'} },
    {path: "contact", component: ContactComponent,  data: {animation: 'Contact'} }


    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

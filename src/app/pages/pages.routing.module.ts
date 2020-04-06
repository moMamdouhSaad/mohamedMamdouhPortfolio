import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesContainerComponent } from './pages-container/pages-container.component';


const routes: Routes =
    [
    {path: '', redirectTo: 'pages-container', pathMatch: 'full'},
    {path:"pages-container",component:PagesContainerComponent},

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { ContainerComponent } from './container/container.component';
import { MaterialsModule } from '../materials.module';
import { AdminPanelHeaderComponent } from './views/admin-panel-header/admin-panel-header.component';
import { ProjectsListComponent } from './views/projects-list/projects-list.component';
import { MailsListComponent } from './views/mails-list/mails-list.component';
import { EditProjectComponent } from './views/edit-project/edit-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './views/add-project/add-project.component';


@NgModule({
  declarations: [ContainerComponent, AdminPanelHeaderComponent, ProjectsListComponent, MailsListComponent, EditProjectComponent, AddProjectComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ]
})
export class AdminPanelModule { }

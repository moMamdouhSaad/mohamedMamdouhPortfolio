import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
projects;
  constructor(public dialog: MatDialog, public api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllProjects().subscribe(data=>{
      this.projects = data;
      console.log(data),
      err=>{
        alert("error with backend")
      }
    })
  }
  openAddDialog(){
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '600px',
      data: 'data'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openEditDialog(project){
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '600px',
      data: project
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  deleteProject(id){
    const ids = {
      _id: id
    }
    this.api.deleteProject(ids).subscribe(data=>console.log(data))
  }

}

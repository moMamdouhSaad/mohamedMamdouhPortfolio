import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {

  project: Project;
  projectId: string;

  constructor(private activatedRoute: ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.params['id'];
    this.getProject(this.projectId)

  }

  getProject(id){
    this.api.getProject(id).subscribe((data:any)=>{
      this.project = data.project[0];
      console.log(this.project)
    })
  }

}

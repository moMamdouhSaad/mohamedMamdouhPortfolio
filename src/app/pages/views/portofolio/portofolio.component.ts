import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/admin-panel/services/api.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

 @Input() projects: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllProjects().subscribe(data=>this.projects = data)

  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

 @Input() projects: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.projects)
    },1500)
  }

}

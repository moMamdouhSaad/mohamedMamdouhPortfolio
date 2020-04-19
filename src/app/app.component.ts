import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'mohamedMamdouh';
  isAdminPanel:boolean = false;


  constructor ( private location: Location, private router: Router){
    console.log(this.location.path())
    this.router.events.subscribe(event => {
     if(this.location.path()=="/admin-panel"){
      this.isAdminPanel = true;
     }else{
       this.isAdminPanel = false;
     }
      

    })
      }

}

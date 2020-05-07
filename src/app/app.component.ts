import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, query, style, animateChild, group, animate } from '@angular/animations';
import { slideInAnimation } from './route-animation';
const fadeIn = [
  query(':leave', style({ position: 'absolute', left: 5, right: 5, opacity: 1 })),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, opacity: 0 })),
  query(':leave', animate('5s', style({ opacity: 0 }))),
  query(':enter', animate('5s', style({ opacity: 1 })))
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]

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

      prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

      }

}

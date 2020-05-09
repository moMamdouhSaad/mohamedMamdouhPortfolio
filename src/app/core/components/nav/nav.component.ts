import { Component, OnInit } from '@angular/core';
import { NavService } from '../../nav.service';
import { LoaderService } from '../../loader.service';
import { LoaderState } from 'src/app/interfaces/loader-state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show:boolean;
  constructor(public navService: NavService, private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.show = false;
    this.loaderService.loaderState.subscribe((loaderState: LoaderState)=>{
      this.show = loaderState.show;
    })
    
  }

  setToolbarOpacity(value){
    this.navService.setHeaderOpacity(value)
  }

}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { NavService } from 'src/app/core/nav.service';

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.css']
})
export class PagesContainerComponent implements OnInit,AfterViewInit {
  constructor(private navService: NavService) { }

  @ViewChild("abouts") MyProp: ElementRef;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if(event.target.scrollTop == 0){
       this.navService.setHeaderOpacity(true);
       return
           }
       this.navService.setHeaderOpacity(false)
  }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(){

    
  }
  goTo(){

    document.getElementById("abouts").scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest" });
    // window.scroll({ top: 99, behavior: "smooth" });

  }
}

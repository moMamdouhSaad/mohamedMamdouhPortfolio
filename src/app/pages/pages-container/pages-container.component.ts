import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { NavService } from 'src/app/core/nav.service';

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.css']
})
export class PagesContainerComponent implements OnInit,AfterViewInit {
  constructor(private navService: NavService) { }
  @ViewChild("about") aboutElement; 
 homeOffset;
 aboutOffset;
 portofolioOffset;
 contactOffset; 
  @ViewChild("abouts") MyProp: ElementRef;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if(event.target.scrollTop == 0){
       this.navService.setHeaderOpacity(true);
       return
           }
       this.navService.setHeaderOpacity(false)
    
     

    
    }
    action(event : any) {
      //do something with the element
      
}

  
  ngOnInit(): void {
    this.navService.getCurrentSection$().subscribe(sectionName=>{
      this.goTo(sectionName)
    })

  }
  ngAfterViewInit(){
    console.log(this.aboutOffset)

     this.homeOffset = document.getElementById('home').getBoundingClientRect();
     this.aboutOffset = document.getElementById('about').getBoundingClientRect();
     this.portofolioOffset = document.getElementById('portofolio').getBoundingClientRect();
     this.contactOffset = document.getElementById('contact').getBoundingClientRect();

  }
  goTo(sectionName: string){
    document.getElementById(sectionName).scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest" });
  }
}

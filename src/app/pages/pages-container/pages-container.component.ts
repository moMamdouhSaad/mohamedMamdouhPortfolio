import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { NavService } from 'src/app/core/nav.service';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactComponent } from '../views/contact/contact.component';
import { SnackBarComponent } from '../views/snack-bar/snack-bar.component';

@Component({
  selector: 'app-pages-container',
  templateUrl: './pages-container.component.html',
  styleUrls: ['./pages-container.component.css']
})
export class PagesContainerComponent implements OnInit,AfterViewInit {
  constructor(private navService: NavService, private api: ApiService, private _snackBar: MatSnackBar) { }
  @ViewChild("about") aboutElement; 
  @ViewChild('contact') contactComp: ContactComponent;
  projects: any;
 homeOffset;
 aboutOffset;
 portofolioOffset;
 contactOffset; 
  @ViewChild("abouts") MyProp: ElementRef;
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if(event.target.scrollTop == 0){
       this.navService.setHeaderOpacity(true);
       this.navService.setCurrentSection("home")
       return
           }
       switch(Math.trunc(event.target.scrollTop)){

        case this.homeOffset :
          this.navService.setCurrentSection("home")
        break;

        case this.aboutOffset:
        this.navService.setCurrentSection("about")
        break;
        
        case this.portofolioOffset:
          this.navService.setCurrentSection("portofolio")
          break;
        
        case this.contactOffset - 1 :
        case this.contactOffset :
          this.navService.setCurrentSection("contact")
        break;

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
    this.api.getAllProjects().subscribe(data=>this.projects = data)
  }
  ngAfterViewInit(){
   this.homeOffset = document.getElementById('home').offsetTop;
   this.aboutOffset = document.getElementById('about').offsetTop;   
   this.portofolioOffset = document.getElementById('portofolio').offsetTop;
   this.contactOffset = document.getElementById('contact').offsetTop;
  }
  goTo(sectionName: string){
    document.getElementById(sectionName).scrollIntoView({ behavior: "smooth", block: "start",inline: "nearest" });
  }

  newMail(value){
    this.api.newMail(value).subscribe(data=>
      {
        if(data.hexCode == "00"){
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: 5 * 1000,
          });
          this.contactComp.formDirective.resetForm();
          this.contactComp.contactFormGroup.reset();
        }
      }
      )
  }

}

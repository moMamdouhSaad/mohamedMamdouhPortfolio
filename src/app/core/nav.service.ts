import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  headerOpacity = new BehaviorSubject<boolean>(false);// true to make header with 0 opacity ( at top of website)
  currentSection:BehaviorSubject<string> = new BehaviorSubject<string>("home");

  setHeaderOpacity(value:boolean){
    this.headerOpacity.next(value)
  }
  getHeaderOpacity$():Observable<boolean>{
    return this.headerOpacity.asObservable();
  }

  setCurrentSection(sectionName: string){
    this.currentSection.next(sectionName)
  }
  getCurrentSection$(){
    return this.currentSection.asObservable();
  }

}

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHeaderService {
currentView: BehaviorSubject<string> = new BehaviorSubject<string>("projects");
  constructor() { }

setCurrentView(view: string){
  this.currentView.next(view);
}

getCurrentView$():Observable<string>{
  return this.currentView.asObservable()
}
}

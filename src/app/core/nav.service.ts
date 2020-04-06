import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }
  headerOpacity = new BehaviorSubject<boolean>(true);
  // true to make header with 0 opacity ( at top of website)

  setHeaderOpacity(value:boolean){
    this.headerOpacity.next(value)
  }
  getHeaderOpacity$():Observable<boolean>{
    return this.headerOpacity.asObservable();
  }


}

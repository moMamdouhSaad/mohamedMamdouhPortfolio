import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:4000/api/"
  constructor(private http: HttpClient) { }

  newMail(mail):Observable<any>{
    return this.http.post(this.url+ "mails/createMail", mail )
  }
  getAllProjects(){
    return this.http.get(this.url + 'projects/getAllProjects').pipe(map((data:any)=>data.projects))
  }
}

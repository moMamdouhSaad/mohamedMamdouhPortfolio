import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "http://localhost:80/api/"
  constructor(private http: HttpClient) { }

  newProject(project){
    return this.http.post(this.url + '/projects/create', project)
  }
  getAllProjects(){
    return this.http.get(this.url + '/projects/getAllProjects').pipe(map((data:any)=>data.projects))
  }
  updateProject(project){
    return this.http.put(this.url + '/projects/updateProject', project)
  }
  deleteProject(id){
    return this.http.delete(this.url + '/projects/deleteProject/'+ id._id)
  }

  getAllMails(){
    return this.http.get(this.url + '/mails/getAllMails').pipe(map((data:any)=>data.mails))
  }
  deleteEmail(id){
    return this.http.delete(this.url + '/mails/deleteMail/'+ id)
  }

}

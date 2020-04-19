import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.css']
})
export class MailsListComponent implements OnInit {
mails;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllMails().subscribe(data=>{this.mails = data ; console.log(data)})
  }

deleteEmail(id){
  this.api.deleteEmail(id).subscribe(data=>console.log(data))
}

}

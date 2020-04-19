import { Component, OnInit } from '@angular/core';
import { AdminHeaderService } from '../services/admin-header.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(public headerService: AdminHeaderService) { }

  ngOnInit(): void {
  }

}

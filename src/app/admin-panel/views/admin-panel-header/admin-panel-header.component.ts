import { Component, OnInit } from '@angular/core';
import { AdminHeaderService } from '../../services/admin-header.service';

@Component({
  selector: 'app-admin-panel-header',
  templateUrl: './admin-panel-header.component.html',
  styleUrls: ['./admin-panel-header.component.css']
})
export class AdminPanelHeaderComponent implements OnInit {

  constructor(public headerService: AdminHeaderService) { }

  ngOnInit(): void {
  }

}

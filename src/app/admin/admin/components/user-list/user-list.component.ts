import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() orgName = '';
  devsName = "Melashu Amare";
  constructor() { }

  ngOnInit(): void {
  }

}

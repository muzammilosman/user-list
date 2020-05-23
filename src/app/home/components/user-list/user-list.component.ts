import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/http/api.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 

  usersList: []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers()
    this.fetchUsers()
  }
  
  fetchUsers() {
    this.usersList = JSON.parse(localStorage.getItem('users'))
  }

}

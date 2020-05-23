import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/http/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: [];
  search: String = '';
  searchedUsers: [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem('users') == null) {
      this.api.getUsers();
    }

    this.fetchUsers();
  }

  fetchUsers() {
    this.usersList = JSON.parse(localStorage.getItem('users'));
    this.searchedUsers = JSON.parse(JSON.stringify(this.usersList))
  }

  searchUser() {
    this.searchedUsers = this.usersList.filter( user => {
      return user.name.first.search(new RegExp(this.search,"i")) != -1
    })
  }

}

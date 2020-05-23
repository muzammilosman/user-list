import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../common/http/api.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.users = this.getUsers()
  }
  
  getUsers() {
    this.api.getUsers().subscribe(
      (res) => {
        return res.results
      }
    )
  }

}

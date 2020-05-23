import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Object = {
    username: String,
    password: String
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.credentials)
  }
}

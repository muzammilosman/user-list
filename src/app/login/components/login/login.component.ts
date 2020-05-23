import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('');
  password = new FormControl('')

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginService.userLogin(this.username.value, this.password.value)){
      this.router.navigate(['/home/users-list'])
    } else {
      alert('Invalid Login, username: admin , password: password')
    }
  }
}

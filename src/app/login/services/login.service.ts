import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userLogin(username, password) {
      if(username == 'admin' && password == 'password') {
        localStorage.setItem('loggedIn', 'true')
        return true
      } else {
        return false
      }
  }
}

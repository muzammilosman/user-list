import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usersUrl = 'https://randomuser.me/api/0.8/?results=20'

  constructor(public http: HttpClient) { }

  getUsers() {
    let usersLocal
    this.http.get(this.usersUrl).pipe(
      map(res => {return res.results}),
      catchError(error => {return error})
    ).subscribe(
      users => {
        usersLocal = users.map( item => { return item.user } )
        localStorage.setItem('users', JSON.stringify(usersLocal))
      }
    )
  }

  createUser(userDetails){
    let usersLocal = JSON.parse(localStorage.getItem('users'))
    if(usersLocal != null){
      usersLocal.push(userDetails)
    }
    else{
      usersLocal = [userDetails]
    }
    localStorage.setItem('users', JSON.stringify(usersLocal))
    return true
  }

}

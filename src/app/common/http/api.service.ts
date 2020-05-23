import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usersUrl = 'https://randomuser.me/api/0.8/?results=20'

  constructor(public http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.usersUrl)
  }
}

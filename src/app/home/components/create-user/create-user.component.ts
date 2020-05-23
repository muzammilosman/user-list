import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './../../../common/http/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormGroup({
      title: new FormControl(''),
      first: new FormControl(''),
      last: new FormControl('')
    }),
    email: new FormControl(''),
    cell: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    dob: new FormControl('')
  });

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(event: Event) {
    event.preventDefault();
    console.log("User created:", this.userForm.value);
    this.api.createUser(this.userForm.value);
    this.router.navigate(['/home/users-list']);
  }

}

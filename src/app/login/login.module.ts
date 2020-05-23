import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module'

import { LoginComponent } from './components/login/login.component';

import { LoginService} from './services/login.service'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }

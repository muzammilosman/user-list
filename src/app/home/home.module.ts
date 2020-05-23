import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module'

import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';



@NgModule({
  declarations: [HomeComponent, UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    UserListComponent
  ]
})
export class HomeModule { }

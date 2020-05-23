import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component'
import { CreateUserComponent} from './components/create-user/create-user.component'


const routes: Routes = [
  {
    path: '',
    children:[
        {path: 'users-list', component: UserListComponent},
        {path: 'create-user', component: CreateUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
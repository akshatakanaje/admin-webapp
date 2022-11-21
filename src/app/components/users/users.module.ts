import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewuserComponent } from './viewuser/viewuser.component';



@NgModule({
  declarations: [
    AdduserComponent,
    ListusersComponent,
    ViewuserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }

import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public usersList:any[] =[];

  constructor(private userService: UsersService) { }  //here we are going access all data from the userService

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe((response:any) => {  //response is nothing but user data
     //console.log("Get all users data");
     //console.log(response); 
     this.usersList = response;   
    });
  }

}

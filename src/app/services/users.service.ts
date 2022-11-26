import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {   //we need a service to connect the users.json file to users.component.html file

  constructor(private httpClient: HttpClient) { }  //httpClient can read a static data as well as data coming from server

  getAllUsers (){
    return this.httpClient.get<any[]>('../../assets/json/users.json'); 
  }

  getOne(id:number) {
    return this.httpClient.get<any[]>('../../assets/json/users.json');
  }
}

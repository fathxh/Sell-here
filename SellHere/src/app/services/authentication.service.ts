import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  register(name:any,email:any,address:any,phone:any,password:any){
    var data={
      name,email,address,phone,password
    }
    return this.http.post("http://localhost:3010/register",data)
  }
  login(phone:any,password:any){
    var data={
      phone,password
    }
    return this.http.post("http://localhost:3010/login",data)
  }
}
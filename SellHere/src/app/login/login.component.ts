import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  phone:any
  password=""
  constructor(private rout:Router,private srv:AuthenticationService){}
  ngOnInit(): void {
   
  }
  login(){
    var phone=this.phone
    var password=this.password
    this.srv.login(phone,password)
    .subscribe((user)=>{
      if(user){
        alert("login successfull")
        this.rout.navigateByUrl('dashboard')
      }else{
        alert("can't connect")
      }
    },(user)=>{
      alert(user.error.message)
      location.reload()
    })


  }

  onreg(){
    console.log("hloooooo");
    
    this.rout.navigateByUrl('register')
  }

}

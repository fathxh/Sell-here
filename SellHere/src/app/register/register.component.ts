import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(4), Validators.maxLength(4)]]
  })

  constructor(private fb: FormBuilder, private srv: AuthenticationService, private rout: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  register() {
    var name:any = this.form.value.name
    var email:any = this.form.value.email
    var address:any = this.form.value.address
    var phone:any = this.form.value.phone
    var password:any = this.form.value.password

    if (this.form.valid){
      this.srv.register(name, email, address, phone, password)
        .subscribe((user) => {
          if(user) {
            alert("registered successfully")
            this.rout.navigateByUrl('')
          } else {
            alert("registration failed")
          }
        }, (user) => {
          alert(user.error.message)
          this.rout.navigateByUrl('')
        })
    }
  }
}

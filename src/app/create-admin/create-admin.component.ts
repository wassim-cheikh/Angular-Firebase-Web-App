import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  form = new FormGroup({
    email : new FormControl (null , Validators.required) ,
    password : new FormControl(null , Validators.required),
    password2 : new FormControl(null,Validators.required)
  })
  constructor(private auth : AuthService , private router : Router) {}
  createAdmin() {
    this.auth.addadmin(this.form.get('email').value , this.form.get('password').value) 
   }

}

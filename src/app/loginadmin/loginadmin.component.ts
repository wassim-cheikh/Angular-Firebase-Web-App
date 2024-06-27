import { Component, OnInit } from '@angular/core';
import { Auth, deleteUser, signOut } from '@angular/fire/auth';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
  
})

export class LoginadminComponent implements OnInit {
  formlogin = new FormGroup({
    email : new FormControl (null , Validators.required) ,
    password : new FormControl(null , Validators.required)
  })
   

  constructor( private auth : AuthService,private router:Router ) { }
  loginsubmit ( ) {
      this.auth.loginadmin(this.formlogin.get('email').value,this.formlogin.get('password').value)
  }
 
   
   
  ngOnInit(
    
  ): void {
    
    


  }
 

}

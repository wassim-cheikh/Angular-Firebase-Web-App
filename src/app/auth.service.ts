import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, updateEmail, updatePassword, user } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth : Auth,private router:Router  ) { }

  loginadmin(email : any , password:any) {
    signInWithEmailAndPassword(this.auth ,email,password)
    .then ((res:any)=> {
      console.log(res);
      if(res) {
        localStorage.setItem('admin' , email )
        localStorage.setItem('loggedin' , 'true')
        console.log(localStorage.getItem('loggedin'))
        this.router.navigate(['admin'])
 
      }
      
      else {localStorage.setItem('loggedin' , 'false')
      
      }
      
     
      
    }) .catch((err)=> {
      console.log(err);
      this.router.navigate([''])
      alert(err.message);
    })}


    addadmin(email : string,password: string) {
      createUserWithEmailAndPassword(this.auth ,email,password)
      .then ((res:any)=> {
        console.log(res);
        if(res) {alert(('success'))
        this.router.navigate(['/admin'])
          
    }})
    .catch((err)=> {
      alert(err.message); })
  }

}

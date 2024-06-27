import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 admin : any
  logout( ) {
    localStorage.setItem('loggedin' , 'false')
    localStorage.removeItem('admin')
    this.router.navigate(['loginadmin'])
    
  }

  
  constructor( private router : Router) { }
  
  ngOnInit(): void {
   this.admin=localStorage.getItem('admin')
  }

}

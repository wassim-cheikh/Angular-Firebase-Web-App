import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form=new FormGroup({
    time : new FormControl(formatDate(new Date(),  'dd-MM-yyyy hh:mm:ss a', 'en-US', '+1'),) ,
    email : new FormControl(null,[Validators.required,Validators.email]),
  fname:new FormControl( null,[Validators.required, Validators.maxLength(15),Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
  lname:new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
  tel:new FormControl(null),
  desc:new FormControl(null,Validators.required),
  object:new FormControl(null,[Validators.required , Validators.maxLength(35)]),
 
  })
  Submit() {
      console.log(this.form);
      this.http.post('https://teamdoo-dee3b-default-rtdb.firebaseio.com/contact.json',this.form.value).subscribe((res)=> {
        console.log(res);
        if (res) {
          alert ("succes")
          this.router.navigate(['/'])
        }
        else alert(console.error())
        
      })
    }
    
    
      constructor(private http : HttpClient,private router:Router) { }
    
    ngOnInit(): void {
    
 
 
    }
  }


 


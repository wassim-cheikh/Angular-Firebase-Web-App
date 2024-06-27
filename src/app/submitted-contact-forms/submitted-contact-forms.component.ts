import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import  {getStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-submitted-contact-forms',
  templateUrl: './submitted-contact-forms.component.html',
  styleUrls: ['./submitted-contact-forms.component.css']
})
export class SubmittedContactFormsComponent {
  tab : any
   
  constructor(private http : HttpClient , private auth : AuthService , private router : Router) { }
  getdata() {
    
    this.http.get('https://teamdoo-dee3b-default-rtdb.firebaseio.com/contact.json')
    .pipe(map((res :any )=> {
      const tab=[];
      
      for (const key in res) {
      
       if (res.hasOwnProperty(key)) {
      
        tab.push({key , ...res[key]})
        
       }
      }
      return tab;
     
    }))

    
    .subscribe((tab)=> {
      console.log(tab);
      
      this.tab=tab;
    })
    
  
  }
  ngOnInit(): void {
    this.getdata() 
 
  }

}

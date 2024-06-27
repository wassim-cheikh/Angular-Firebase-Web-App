import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-joboffers',
  templateUrl: './joboffers.component.html',
  styleUrls: ['./joboffers.component.css']
})
export class JoboffersComponent implements OnInit{
  constructor(private http : HttpClient , private router : Router , private dialog :MatDialog) {}
 n:number
 static fArray = []
  tab = []
  opendialog() {
   this.dialog.open(FormComponent)   
  }

 getdata() {
    
    this.http.get('https://teamdoo-dee3b-default-rtdb.firebaseio.com/joboffers.json')
    .pipe(map((res :any[] )=> {
      const tab=[];
      for (const key in res) {
        tab.push({key , ...res[key]})
       
      }
      return tab;
    }))

    
    .subscribe((tab)=> {
      console.log(tab);
      this.tab=tab;
     
    })
  
  }
    
 
  setID(id:any) {
    FormComponent.jobID=id
    }
    settype(type:any) {
      FormComponent.type=type
      }
    
    click() {
      window.scrollTo({ left: 0, top: 20, behavior: 'smooth' });
    }
    route1() : boolean {
      if (this.router.url!=='/join_us') {
        return true 
      }
      else 
      return false 
    }
    route2() : boolean {
      if (this.router.url!=='/Manage_Job_Offers') {
        return true 
      }
      else 
      return false }
     delete(key : string) {
          this.http.delete('https://teamdoo-dee3b-default-rtdb.firebaseio.com/joboffers/'+key+'.json') .subscribe((res)=>{
            console.log(res)
            alert("succes")
            this.ngOnInit() 

            
     })
   
           
          }
          

          
        
        
        
      
    

ngOnInit(): void {
  this.getdata();
  this.route1();
  this.route2();
  this.click();
}
}

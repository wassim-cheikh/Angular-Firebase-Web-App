
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { JoboffersComponent } from '../joboffers/joboffers.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-job-offer',
  templateUrl: './add-job-offer.component.html',
  styleUrls: ['./add-job-offer.component.css']
})
export class AddJobOfferComponent {
  data=new JoboffersComponent(this.http , this.router , this.dialog)
  id = this.generateGuid()
  eid = null
  constructor(private http : HttpClient , private router: Router , private dialog : MatDialog) {}
  generateGuid() : string {
    return '#xxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  joboffer = new FormGroup ( {
ID : new FormControl(this.id , Validators.required ),
 name : new FormControl(null , Validators.required),
 posts : new FormControl(null , [Validators.required , Validators.pattern ("[0-9]*"),Validators.maxLength(2)]),
 date : new FormControl(formatDate(new Date(),  'dd-MM-yyyy hh:mm:ss a', 'en-US', '+1')),
 deadline : new FormControl(null , Validators.required ),
 type : new FormControl(null , Validators.required),
 location : new FormControl(null , Validators.required),
 contract : new FormControl(null , Validators.required),
 responsabilities : new FormControl(null , Validators.required),
 qualifications : new FormControl(null , Validators.required),
 description : new FormControl(null , Validators.required)



  })
   
 
submit() {
  console.log(this.joboffer.valid)
  console.log(this.joboffer.value)
  console.log(this.joboffer)
  if (this.joboffer.valid) {
    this.http.post('https://teamdoo-dee3b-default-rtdb.firebaseio.com/joboffers.json' ,this.joboffer.value) .subscribe((res)=> {
        console.log(res);
        if (res) { alert ("succes");
      this.dialog.closeAll()}
       
       
        
        

        
      })
  }
  else alert(this.joboffer.errors)
  
}


ngOnInit(): void {
  this.id = this.generateGuid() ;
  
}

}

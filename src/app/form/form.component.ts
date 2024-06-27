import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage } from 'firebase/storage';
import { finalize } from 'rxjs';
import { AngularFireModule } from '@angular/fire/compat';
import { Files } from '../file';
import { JoboffersComponent } from '../joboffers/joboffers.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { JoinComponent } from '../join/join.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  static jobID:any 
  id =this.generateGuid()
  static type :any
  jid=FormComponent.jobID
  join= new JoinComponent(this.http , this.dialog)
 
form=new FormGroup({
  id : new FormControl(this.id, Validators.required),
  time : new FormControl(formatDate(new Date(),  'dd-MM-yyyy hh:mm:ss a', 'en-US', '+1'),) ,
  jobId : new FormControl(this.jid , Validators.required),
  type : new FormControl(FormComponent.type),
  email : new FormControl(null,[Validators.required,Validators.email]),
  fname:new FormControl( null,[Validators.required, Validators.maxLength(15),Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
  lname:new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
  tel:new FormControl(null,[Validators.required , Validators.pattern("[0-9]*"),Validators.maxLength(8),Validators.minLength(8)]),
  adress:new FormControl(null),
  date:new FormControl(null,),
  mot:new FormControl(null,Validators.required),
  cv:new FormControl(null,[Validators.required ]),
  






});
Submit() {
  
  console.log(this.form);
  this.http.post('https://teamdoo-dee3b-default-rtdb.firebaseio.com/career.json',this.form.value).subscribe((res)=> {
    console.log(res)
    
   
  },
  
  )
  
} closedialog() {this.dialog.closeAll()}

file = new Files()
path : string
selectFile($event) {
  this.file.formID=this.form.get('id').value
   this.file.name=$event.target.files[0].name
   this.file.size=$event.target.files[0].size
   this.path=$event.target.files[0]


}


uploadFiles() {
  this.storage.upload("cv/"+this.file.name,this.path).then(()=>{
    this.storage.ref('cv/'+this.file.name).getDownloadURL().subscribe((res)=> {
      this.file.url=res
      this.http.post('https://teamdoo-dee3b-default-rtdb.firebaseio.com/cv.json',this.file).subscribe((res)=>{
        if (res) {
          alert ("succes")
          
        }
        console.log(res)
      })
      console.log(this.file)
    });
  })
  
  
 
    
}


   constructor(private http : HttpClient , private storage:AngularFireStorage , private router : Router , private dialog : MatDialog) { }

   generateGuid() : string {
return '#xxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    }
    
  ngOnInit(): void {
   
    
  }

}

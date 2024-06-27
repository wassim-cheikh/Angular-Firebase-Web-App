import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { map } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { JoboffersComponent } from '../joboffers/joboffers.component';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  
  setID(id:any) {
    FormComponent.jobID=id
    }
    settype(type:any) {
      FormComponent.type=type
      }

scroll(e: HTMLElement) {
  e.scrollIntoView({behavior: 'smooth'});

}

  constructor( private http : HttpClient , private dialog : MatDialog) { }
  opendialog() {
    this.dialog.open(FormComponent,{
      
    })
   
    
  }
 
  ngOnInit(): void {
    
  }

}

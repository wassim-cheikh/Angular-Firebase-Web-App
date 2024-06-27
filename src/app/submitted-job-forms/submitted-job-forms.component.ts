import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Joboffer } from '../joboffer';
import { Router } from '@angular/router';
import { JoboffersComponent } from '../joboffers/joboffers.component';
import { MatDialog } from '@angular/material/dialog';
import { JobOfferDialogComponent } from '../job-offer-dialog/job-offer-dialog.component';
import { CvComponent } from '../cv/cv.component';

@Component({
  selector: 'app-submitted-job-forms',
  templateUrl: './submitted-job-forms.component.html',
  styleUrls: ['./submitted-job-forms.component.css']
})
export class SubmittedJobFormsComponent implements OnInit{
  cv : any
  tab : any
   static url : any 
 static joboffer = new Joboffer()
  constructor(private http : HttpClient , private router : Router ,private dialog : MatDialog ) { }
  job = new JoboffersComponent(this.http, this.router , this.dialog)
  opendialog() {
    this.dialog.open(JobOfferDialogComponent)
  }
  getdata() {
    
    this.http.get('https://teamdoo-dee3b-default-rtdb.firebaseio.com/career.json')
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
  
  
searchjob(jobId:string) {
  
 for(let i =0;i<this.job.tab.length;i++){
  if (this.job.tab[i].ID==jobId) {
SubmittedJobFormsComponent.joboffer.ID=this.job.tab[i].ID
SubmittedJobFormsComponent.joboffer.contract=this.job.tab[i].contract
SubmittedJobFormsComponent.joboffer.date=this.job.tab[i].date
SubmittedJobFormsComponent.joboffer.deadline=this.job.tab[i].deadline
SubmittedJobFormsComponent.joboffer.description=this.job.tab[i].description
SubmittedJobFormsComponent.joboffer.key=this.job.tab[i].key
SubmittedJobFormsComponent.joboffer.location=this.job.tab[i].location
SubmittedJobFormsComponent.joboffer.name=this.job.tab[i].name
SubmittedJobFormsComponent.joboffer.posts=this.job.tab[i].posts
SubmittedJobFormsComponent.joboffer.qualifications=this.job.tab[i].qualifications
SubmittedJobFormsComponent.joboffer.responsabilities=this.job.tab[i].responsabilities
SubmittedJobFormsComponent.joboffer.type=this.job.tab[i].type 
}

  
 }}
  display(id : any) :boolean {
    if (id==null || id==0) {return true}
    else return false ;
  }
  getCv() {
    
    this.http.get('https://teamdoo-dee3b-default-rtdb.firebaseio.com/cv.json')
    .pipe(map((res :any[] )=> {
      const tab=[];
      for (const key in res) {
       
        tab.push({key , ...res[key]})
       
      }
      return tab;
    }))
    .subscribe((tab)=> {
      this.cv=tab
      console.log(tab);
      
    })
  }
  searchCv(formID) {
    for (let i=0;i<this.cv.length;i++) {
      if (this.cv[i].formID==formID) {
        SubmittedJobFormsComponent.url=this.cv[i].url 
      }}
  }
  opendialog2() {
    this.dialog.open(CvComponent)
  }
 
  
  ngOnInit(): void {
    this.getdata() ;
    this.job.getdata() ;
    this.getCv()
  }

}

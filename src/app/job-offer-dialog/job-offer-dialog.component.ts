import { Component } from '@angular/core';
import { SubmittedJobFormsComponent } from '../submitted-job-forms/submitted-job-forms.component';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offer-dialog',
  templateUrl: './job-offer-dialog.component.html',
  styleUrls: ['./job-offer-dialog.component.css']
})
export class JobOfferDialogComponent {
  job=SubmittedJobFormsComponent.joboffer
  constructor(private http : HttpClient , private router : Router) {}
  
}


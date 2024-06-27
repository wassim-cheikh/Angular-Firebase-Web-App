import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmittedJobFormsComponent } from '../submitted-job-forms/submitted-job-forms.component';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
constructor(private router: Router) {
}
url=SubmittedJobFormsComponent.url

ngOnInit(): void {

    
}
}

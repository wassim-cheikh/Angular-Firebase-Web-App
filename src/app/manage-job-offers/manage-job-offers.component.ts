import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddJobOfferComponent } from '../add-job-offer/add-job-offer.component';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-manage-job-offers',
  templateUrl: './manage-job-offers.component.html',
  styleUrls: ['./manage-job-offers.component.css']
})
export class ManageJobOffersComponent {
constructor(private dialog : MatDialog) {

}


opendialog() {
  this.dialog.open(AddJobOfferComponent)
}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar' ;
import {MatSidenavModule} from '@angular/material/sidenav' ;
import {MatIconModule} from '@angular/material/icon' ;
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list' ;
import {MatButtonModule} from '@angular/material/button' ;
import {MatCardModule} from '@angular/material/card';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { FooterComponent } from './footer/footer.component';
import { OdooComponent } from './odoo/odoo.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatRadioModule} from '@angular/material/radio';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { SubmittedJobFormsComponent } from './submitted-job-forms/submitted-job-forms.component';
import { SubmittedContactFormsComponent } from './submitted-contact-forms/submitted-contact-forms.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { JoboffersComponent } from './joboffers/joboffers.component';


import { JobOfferDialogComponent } from './job-offer-dialog/job-offer-dialog.component';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { CvComponent } from './cv/cv.component';
import { SafePipe } from './safe.pipe';
import { AddJobOfferComponent } from './add-job-offer/add-job-offer.component';
import { Part4Component } from './part4/part4.component';
import { ManageJobOffersComponent } from './manage-job-offers/manage-job-offers.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    ContactComponent,
    AboutComponent,
    JoinComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    FooterComponent,
    OdooComponent,
   
    FormComponent,
    AdminComponent,
    LoginadminComponent,
    SubmittedJobFormsComponent,
    SubmittedContactFormsComponent,
    CreateAdminComponent,
    JoboffersComponent,
    SafePipe,
    
       
         JobOfferDialogComponent,
         CvComponent,
         SafePipe,
         AddJobOfferComponent,
         Part4Component,
         ManageJobOffersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MaterialFileInputModule,
    MatRadioModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

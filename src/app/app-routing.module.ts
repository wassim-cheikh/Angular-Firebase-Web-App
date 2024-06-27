import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';
import { OdooComponent } from './odoo/odoo.component';
import { AdminComponent } from './admin/admin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AuthGuard } from './guard/auth.guard';
import { SubmittedJobFormsComponent } from './submitted-job-forms/submitted-job-forms.component';
import { SubmittedContactFormsComponent } from './submitted-contact-forms/submitted-contact-forms.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';

import { JoboffersComponent } from './joboffers/joboffers.component';

import { AddJobOfferComponent } from './add-job-offer/add-job-offer.component';
import { ManageJobOffersComponent } from './manage-job-offers/manage-job-offers.component';
const routes: Routes = [{path:'' , component: BodyComponent},
{path: 'contact_us',component:ContactComponent},
{path : 'about_us',component : AboutComponent} ,
{path:'join_us' , component : JoinComponent},
{path:'odoo' , component: OdooComponent},
{path:'odoo' , component: OdooComponent},
{path:'admin',component:AdminComponent , canActivate : [AuthGuard],runGuardsAndResolvers: 'always'},
{path: 'loginadmin' , component : LoginadminComponent},
{path : 'SubmittedJobForms', component : SubmittedJobFormsComponent ,canActivate : [AuthGuard] ,runGuardsAndResolvers: 'always'
},
{path : 'SubmittedContactForms', component : SubmittedContactFormsComponent ,canActivate : [AuthGuard],runGuardsAndResolvers: 'always'},
{path : 'createAdmin' , component : CreateAdminComponent  , canActivate : [AuthGuard],runGuardsAndResolvers: 'always'},

{path:'jobOffers',component : JoboffersComponent},

{path:'addJobOffer',component:AddJobOfferComponent ,canActivate : [AuthGuard],runGuardsAndResolvers: 'always'},
{path : 'Manage_Job_Offers' , component: ManageJobOffersComponent , canActivate : [AuthGuard],runGuardsAndResolvers: 'always'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

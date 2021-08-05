import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantSideModuleRoutingModule } from './applicant-side-routing.module';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { WalkInDetailsPageComponent } from './walk-in-details-page/walk-in-details-page.component';
import { WalkInApplicationSuccessPageComponent } from './walk-in-application-success-page/walk-in-application-success-page.component';

@NgModule({
  declarations: [
    ListingPageComponent,
    WalkInDetailsPageComponent,
    WalkInApplicationSuccessPageComponent
  ],
  imports: [
    CommonModule,
    ApplicantSideModuleRoutingModule
  ]
})
export class ApplicantSideModule { }

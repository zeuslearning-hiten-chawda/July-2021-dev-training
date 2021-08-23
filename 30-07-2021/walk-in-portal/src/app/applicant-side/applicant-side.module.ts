import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantSideModuleRoutingModule } from './applicant-side-routing.module';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { WalkInDetailsPageComponent } from './walk-in-details-page/walk-in-details-page.component';
import { WalkInApplicationSuccessPageComponent } from './walk-in-application-success-page/walk-in-application-success-page.component';
import { ApplicantSideHeaderComponent } from './applicant-side-header/applicant-side-header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListingPageComponent,
    WalkInDetailsPageComponent,
    WalkInApplicationSuccessPageComponent,
    ApplicantSideHeaderComponent,
  ],
  imports: [
    CommonModule,
    ApplicantSideModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ApplicantSideModule { }

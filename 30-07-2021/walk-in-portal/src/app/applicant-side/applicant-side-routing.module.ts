import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { WalkInApplicationSuccessPageComponent } from './walk-in-application-success-page/walk-in-application-success-page.component';
import { WalkInDetailsPageComponent } from './walk-in-details-page/walk-in-details-page.component';

const routes: Routes = [
  { path: '', component: ListingPageComponent },
  { path: 'success', component: WalkInApplicationSuccessPageComponent },
  { path: ':walkinID', component: WalkInDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantSideModuleRoutingModule {}

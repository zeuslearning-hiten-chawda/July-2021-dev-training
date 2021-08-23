import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ReviewProceedComponent } from './review-proceed/review-proceed.component';
import { UserRegistrationHeaderComponent } from './user-registration-header/user-registration-header.component';

const routes: Routes = [
  { path: '', component: UserRegistrationHeaderComponent },
  // { path: 'register/personalInformation', component: PersonalInformationComponent },
  // { path: 'register/qualifications', component: QualificationsComponent },
  // { path: 'register/review', component: ReviewProceedComponent },
  // { path: 'register/header', component: UserRegistrationHeaderComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegistrationRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { UserRegistrationHeaderComponent } from './user-registration-header/user-registration-header.component';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { ReviewProceedComponent } from './review-proceed/review-proceed.component';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
    PersonalInformationComponent,
    UserRegistrationHeaderComponent,
    QualificationsComponent,
    ReviewProceedComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    FormsModule,
    MatStepperModule
  ]
})
export class UserRegistrationModule { }

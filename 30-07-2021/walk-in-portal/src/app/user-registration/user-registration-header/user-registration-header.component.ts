import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';

@Component({
  selector: 'app-user-registration-header',
  templateUrl: './user-registration-header.component.html',
  styleUrls: ['./user-registration-header.component.css'],
})
export class UserRegistrationHeaderComponent implements OnInit {
  _componentToShow: any;
  _PersonalInformationComponentBoolean: boolean = false;
  _QualificationsComponentBoolean: boolean = false;
  _ReviewProceedComponentBoolean: boolean = false;
  constructor(private formService:FormServiceService) {}

  ngOnInit(): void {
    this._componentToShow = PersonalInformationComponent;
    this._PersonalInformationComponentBoolean = true;
    this._QualificationsComponentBoolean = false;
    this._ReviewProceedComponentBoolean = false;
  }
  // First() {
  //   this._componentToShow = PersonalInformationComponent;
  //   this._PersonalInformationComponentBoolean = true;
  //   this._QualificationsComponentBoolean = false;
  //   this._ReviewProceedComponentBoolean = false;
  // }
  // Second() {
  //   this._componentToShow = QualificationsComponent;
  //   this._PersonalInformationComponentBoolean = false;
  //   this._QualificationsComponentBoolean = true;
  //   this._ReviewProceedComponentBoolean = false;
  // }
  // Third() {
  //   this._componentToShow = ReviewProceedComponent;
  //   this._PersonalInformationComponentBoolean = false;
  //   this._QualificationsComponentBoolean = false;
  //   this._ReviewProceedComponentBoolean = true;
  // }

  personalInformation() {
    this._componentToShow = PersonalInformationComponent;
    this._PersonalInformationComponentBoolean = true;
    this._QualificationsComponentBoolean = false;
    this._ReviewProceedComponentBoolean = false;
  }

  qualifications() {
    this._componentToShow = QualificationsComponent;
    this._PersonalInformationComponentBoolean = false;
    this._QualificationsComponentBoolean = true;
    this._ReviewProceedComponentBoolean = false;

    console.log(this.formService.personalInformationVariable.firstName);
    console.log(this.formService.personalInformationVariable.lastName);
    console.log(this.formService.personalInformationVariable.email);
    console.log(this.formService.personalInformationVariable.phoneCode);
    console.log(this.formService.personalInformationVariable.phoneNumber);
    console.log(this.formService.personalInformationVariable.resume);
    console.log(this.formService.personalInformationVariable.portfolioURL);
    console.log(this.formService.personalInformationVariable.jobRoles);
    console.log(this.formService.personalInformationVariable.referral);
    console.log(this.formService.personalInformationVariable.subscription);
    console.log(this.formService.personalInformationVariable.displayPicture);
  }

  reviewProceed() {
    this._componentToShow = ReviewProceedComponent;
    this._PersonalInformationComponentBoolean = false;
    this._QualificationsComponentBoolean = false;
    this._ReviewProceedComponentBoolean = true;
  }
}

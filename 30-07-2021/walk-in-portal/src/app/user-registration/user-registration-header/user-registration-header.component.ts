import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormServiceService } from 'src/app/services/form-service.service';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { QualificationsComponent } from '../qualifications/qualifications.component';
import { ReviewProceedComponent } from '../review-proceed/review-proceed.component';

@Component({
  selector: 'app-user-registration-header',
  templateUrl: './user-registration-header.component.html',
  styleUrls: ['./user-registration-header.component.css'],
})
export class UserRegistrationHeaderComponent implements OnInit,AfterContentInit,AfterViewInit {
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild(PersonalInformationComponent) personalInformationChild!:ElementRef | any;
  @ViewChild(QualificationsComponent) qualificationChild!:ElementRef | any;
  // isLoading = false;
  isPersonalInformationCompleted = false;
  isQualificationsCompleted = false;
  isReviewProceedCompleted = false;
  _componentToShow: any;
  _PersonalInformationComponentBoolean: boolean = false;
  _QualificationsComponentBoolean: boolean = false;
  _ReviewProceedComponentBoolean: boolean = false;

  constructor(private formService: FormServiceService) {}
  ngAfterViewInit(): void {
    console.log(this.personalInformationChild)
    console.log(this.qualificationChild)
  }

  ngAfterContentInit(): void {
    // this.isLoading = false;
  }

  ngOnInit(): void {
    console.log(this.personalInformationChild)
    console.log(this.qualificationChild)
    // this._componentToShow = PersonalInformationComponent;
    // this._PersonalInformationComponentBoolean = true;
    // this._QualificationsComponentBoolean = false;
    // this._ReviewProceedComponentBoolean = false;
    // this.isPersonalInformationCompleted = true;
    // setTimeout(() => {
    //   this.stepper.next();
    // }, 0);

  }

  temp(data: any) {
    if (data.name === 'personalInformation') {
      this.isPersonalInformationCompleted = true;
      console.log(data);
      console.log(this.formService.personalInformationVariable);
      setTimeout(() => {
        this.stepper.next();
      }, 0);
    } else if (data.name === 'qualifications') {
      this.isQualificationsCompleted = true;
      setTimeout(() => {
        if (data.direction === 'previous') {
          this.stepper.previous();
        } else {
          this.stepper.next();
          this.isReviewProceedCompleted = true;
        }
      }, 0);
    } else if (data.name === 'reviewProceed') {
      setTimeout(() => {
        this.stepper.previous();
      }, 0);
    }
  }


  // personalInformation() {
  //   this._componentToShow = PersonalInformationComponent;
  //   this._PersonalInformationComponentBoolean = true;
  //   this._QualificationsComponentBoolean = false;
  //   this._ReviewProceedComponentBoolean = false;
  // }

  // qualifications() {
  //   this._componentToShow = QualificationsComponent;
  //   this._PersonalInformationComponentBoolean = false;
  //   this._QualificationsComponentBoolean = true;
  //   this._ReviewProceedComponentBoolean = false;

  //   console.log(this.formService.personalInformationVariable.firstName);
  //   console.log(this.formService.personalInformationVariable.lastName);
  //   console.log(this.formService.personalInformationVariable.email);
  //   console.log(this.formService.personalInformationVariable.phoneCode);
  //   console.log(this.formService.personalInformationVariable.phoneNumber);
  //   console.log(this.formService.personalInformationVariable.resume);
  //   console.log(this.formService.personalInformationVariable.portfolioURL);
  //   console.log(this.formService.personalInformationVariable.jobRoles);
  //   console.log(this.formService.personalInformationVariable.referral);
  //   console.log(this.formService.personalInformationVariable.subscription);
  //   console.log(this.formService.personalInformationVariable.displayPicture);
  // }

  // reviewProceed() {
  //   this._componentToShow = ReviewProceedComponent;
  //   this._PersonalInformationComponentBoolean = false;
  //   this._QualificationsComponentBoolean = false;
  //   this._ReviewProceedComponentBoolean = true;
  // }
}

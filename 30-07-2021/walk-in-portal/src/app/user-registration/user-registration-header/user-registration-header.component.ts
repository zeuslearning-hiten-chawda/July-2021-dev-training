import { HttpClient } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
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
export class UserRegistrationHeaderComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild(PersonalInformationComponent) personalInformationChild!:
    | ElementRef
    | any;
  @ViewChild(QualificationsComponent) qualificationChild!: ElementRef | any;
  // isLoading = false;
  isPersonalInformationCompleted = false;
  isQualificationsCompleted = false;
  isReviewProceedCompleted = false;
  _componentToShow: any;
  _PersonalInformationComponentBoolean: boolean = false;
  _QualificationsComponentBoolean: boolean = false;
  _ReviewProceedComponentBoolean: boolean = false;

  constructor(
    private formService: FormServiceService,
    private http: HttpClient
  ) {}
  ngAfterViewInit(): void {
    console.log(this.personalInformationChild);
    console.log(this.qualificationChild);
  }

  ngAfterContentInit(): void {
    // this.isLoading = false;
  }

  ngOnInit(): void {
    console.log(this.personalInformationChild);
    console.log(this.qualificationChild);
    // this._componentToShow = PersonalInformationComponent;
    // this._PersonalInformationComponentBoolean = true;
    // this._QualificationsComponentBoolean = false;
    // this._ReviewProceedComponentBoolean = false;
    // this.isPersonalInformationCompleted = true;
    // setTimeout(() => {
    //   this.stepper.next();
    // }, 0);
    // this.temp({ name: 'personalInformation' });
  }
  createUser() {
    console.log('create user called');
    let requestData = {
      personalInformationVariable: {
        firstName: this.formService.personalInformationVariable.firstName,
        lastName: this.formService.personalInformationVariable.lastName,
        email: this.formService.personalInformationVariable.email,
        phoneCode: this.formService.personalInformationVariable.phoneCode,
        phoneNumber: this.formService.personalInformationVariable.phoneNumber,
        resume: this.formService.personalInformationVariable.resume.data,
        portfolioURL: this.formService.personalInformationVariable.portfolioURL,
        referral: this.formService.personalInformationVariable.referral,
        displayPicture:
          this.formService.personalInformationVariable.displayPicture.data,
        jobRoles: this.formService.personalInformationVariable.jobRoles,
        subscription: this.formService.personalInformationVariable.subscription,
      },
      qualificationVariable: {
        educationalQualification:
          this.formService.qualificationVariable.educationalQualification,
        professionalQualification: {
          applicantType: '',
          familiarTech: [] as any[],
          otherFamiliartech: '',
          zeusTestBool: false,
          previouslyAppliedRole: '',
          yearOfExperience: 0 as number | undefined | null,
          currentCTC: 0 as number | undefined | null,
          expectedCTC: 0 as number | undefined | null,
          expertisedTech: [] as any[] | null,
          otherExpertisedTech: '' as string | null,
          onNoticePeriod: false as boolean | null,
          noticePeriodEndDate: '' as string | null,
          noticePeriodDuration: 0 as number | undefined | null,
        },
      },
    };
    if (
      this.formService.qualificationVariable.professionalQualification
        .applicantType !== 'Fresher'
    ) {
      requestData.qualificationVariable.professionalQualification.applicantType =
        this.formService.qualificationVariable.professionalQualification.applicantType;
      requestData.qualificationVariable.professionalQualification.familiarTech =
        this.formService.qualificationVariable.professionalQualification.experienced.familiarTech;
      requestData.qualificationVariable.professionalQualification.otherFamiliartech =
        this.formService.qualificationVariable.professionalQualification.experienced.otherFamiliartech;
      requestData.qualificationVariable.professionalQualification.previouslyAppliedRole =
        this.formService.qualificationVariable.professionalQualification.experienced.previouslyAppliedRole;
      requestData.qualificationVariable.professionalQualification.zeusTestBool =
        this.formService.qualificationVariable.professionalQualification.experienced.zeusTestBool;
      requestData.qualificationVariable.professionalQualification.yearOfExperience =
        this.formService.qualificationVariable.professionalQualification.experienced.yearOfExperience;
      requestData.qualificationVariable.professionalQualification.currentCTC =
        this.formService.qualificationVariable.professionalQualification.experienced.currentCTC;
      requestData.qualificationVariable.professionalQualification.expectedCTC =
        this.formService.qualificationVariable.professionalQualification.experienced.expectedCTC;
      requestData.qualificationVariable.professionalQualification.expertisedTech =
        this.formService.qualificationVariable.professionalQualification.experienced.expertisedTech;
      requestData.qualificationVariable.professionalQualification.otherExpertisedTech =
        this.formService.qualificationVariable.professionalQualification.experienced.otherExpertisedTech;
      requestData.qualificationVariable.professionalQualification.onNoticePeriod =
        this.formService.qualificationVariable.professionalQualification.experienced.onNoticePeriod;
      requestData.qualificationVariable.professionalQualification.noticePeriodEndDate =
        this.formService.qualificationVariable.professionalQualification.experienced.noticePeriodEndDate;
      requestData.qualificationVariable.professionalQualification.noticePeriodDuration =
        this.formService.qualificationVariable.professionalQualification.experienced.noticePeriodDuration;
    } else {
      requestData.qualificationVariable.professionalQualification.applicantType =
        this.formService.qualificationVariable.professionalQualification.applicantType;
      requestData.qualificationVariable.professionalQualification.familiarTech =
        this.formService.qualificationVariable.professionalQualification.experienced.familiarTech;
      requestData.qualificationVariable.professionalQualification.otherFamiliartech =
        this.formService.qualificationVariable.professionalQualification.experienced.otherFamiliartech;
      requestData.qualificationVariable.professionalQualification.previouslyAppliedRole =
        this.formService.qualificationVariable.professionalQualification.experienced.previouslyAppliedRole;
      requestData.qualificationVariable.professionalQualification.zeusTestBool =
        this.formService.qualificationVariable.professionalQualification.experienced.zeusTestBool;
      requestData.qualificationVariable.professionalQualification.yearOfExperience =
        null;
      requestData.qualificationVariable.professionalQualification.currentCTC =
        null;
      requestData.qualificationVariable.professionalQualification.expectedCTC =
        null;
      requestData.qualificationVariable.professionalQualification.expertisedTech =
        null;
      requestData.qualificationVariable.professionalQualification.otherExpertisedTech =
        null;
      requestData.qualificationVariable.professionalQualification.onNoticePeriod =
        null;
      requestData.qualificationVariable.professionalQualification.noticePeriodEndDate =
        null;
      requestData.qualificationVariable.professionalQualification.noticePeriodDuration =
        null;
    }
    console.log(requestData);
    this.formService.addUser(requestData).subscribe((res) => {
      console.log(res);
    });
  }

  temp(data: any) {
    if (data.name === 'personalInformation') {
      this.isPersonalInformationCompleted = true;
      console.log(data);
      // console.log({
      //   firstName: this.formService.personalInformationVariable.firstName,
      //   lastName: this.formService.personalInformationVariable.lastName,
      //   email: this.formService.personalInformationVariable.email,
      //   phoneCode: this.formService.personalInformationVariable.phoneCode,
      //   phoneNumber: this.formService.personalInformationVariable.phoneNumber,
      //   resume: this.formService.personalInformationVariable.resume.data,
      //   portfolioURL:
      //     this.formService.personalInformationVariable.portfolioURL,
      //   referral: this.formService.personalInformationVariable.referral,
      //   displayPicture:
      //     this.formService.personalInformationVariable.displayPicture.data,
      //   jobRoles: this.formService.personalInformationVariable.jobRoles,
      //   subscription:
      //     this.formService.personalInformationVariable.subscription,
      // });
      // this.http
      //   .post('http://localhost:3000/register', {
      //     firstName: this.formService.personalInformationVariable.firstName,
      //     lastName: this.formService.personalInformationVariable.lastName,
      //     email: this.formService.personalInformationVariable.email,
      //     phoneCode: this.formService.personalInformationVariable.phoneCode,
      //     phoneNumber: this.formService.personalInformationVariable.phoneNumber,
      //     resume: this.formService.personalInformationVariable.resume.data,
      //     portfolioURL:
      //       this.formService.personalInformationVariable.portfolioURL,
      //     referral: this.formService.personalInformationVariable.referral,
      //     displayPicture:
      //       this.formService.personalInformationVariable.displayPicture.data,
      //     jobRoles: this.formService.personalInformationVariable.jobRoles,
      //     subscription:
      //       this.formService.personalInformationVariable.subscription,
      //   },{
      //     responseType:'json'
      //   })
      //   .subscribe((res) => {
      //     console.log('posted', res);
      //   });
      setTimeout(() => {
        this.stepper.next();
      }, 0);
    } else if (data.name === 'qualifications') {
      this.isQualificationsCompleted = true;
      setTimeout(() => {
        if (data.direction === 'previous') {
          this.stepper.previous();
        } else {
          this.formService.qualificationFetched.forEach((e) => {
            if (
              e.id ===
              this.formService.qualificationVariable.educationalQualification
                .qualification
            ) {
              this.formService.reviewQualification = e.title;
            }
          });
          this.formService.collegeFetched.forEach((e) => {
            if (
              e.id ===
              this.formService.qualificationVariable.educationalQualification
                .college
            ) {
              this.formService.reviewCollege = e.title;
            }
          });
          this.formService.streamFetched.forEach((e) => {
            if (
              e.id ===
              this.formService.qualificationVariable.educationalQualification
                .stream
            ) {
              this.formService.reviewStream = e.title;
            }
          });
          this.formService.reviewPreferredJobRoles = []
          this.formService.personalInformationVariable.jobRoles.forEach(
            (d) => {
              this.formService.jobRolesFetched.forEach((e) => {
                if (
                  e.id ===
                  d
                ) {
                  this.formService.reviewPreferredJobRoles?.push(e.title)
                }
              });
            }
          );
          if (
            this.formService.qualificationVariable.professionalQualification
              .applicantType === 'Fresher'
          ) {
            this.formService.reviewFamiliarTech = []
            this.formService.qualificationVariable.professionalQualification.fresher.familiarTech.forEach(
              (d) => {
                this.formService.technologyFetched.forEach((e) => {
                  if (
                    e.id ===
                    d
                  ) {
                    this.formService.reviewFamiliarTech?.push(e.title)
                  }
                });
              }
            );
          }else{
            this.formService.reviewFamiliarTech = []
            this.formService.reviewExpertisedTech = []
            this.formService.qualificationVariable.professionalQualification.experienced.familiarTech.forEach(
              (d) => {
                this.formService.technologyFetched.forEach((e) => {
                  if (
                    e.id ===
                    d
                  ) {
                    this.formService.reviewFamiliarTech?.push(e.title)
                  }
                });
              }
            );
            this.formService.qualificationVariable.professionalQualification.experienced.expertisedTech.forEach(
              (d) => {
                this.formService.technologyFetched.forEach((e) => {
                  if (
                    e.id ===
                    d
                  ) {
                    this.formService.reviewExpertisedTech?.push(e.title)
                  }
                });
              }
            );
          }
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

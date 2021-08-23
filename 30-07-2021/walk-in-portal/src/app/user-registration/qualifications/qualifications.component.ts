import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
})
export class QualificationsComponent implements OnInit, AfterViewInit {
  isFresher: boolean = true;
  @Output() localEventEmitter = new EventEmitter();
  qualificationForm!: FormGroup;

  constructor(public formService: FormServiceService, private router: Router) {}

  ngAfterViewInit(): void {
    const accordionItemHeaders = document.querySelectorAll(
      '.accordion-item-header'
    );

    accordionItemHeaders.forEach((item) => {
      item.addEventListener('click', (event) => {
        item.classList.toggle('active');
      });
    });

    // (document.getElementById('fresher-radio') as HTMLElement).addEventListener('click', event => {
    //   this.isFresher = true;
    //   this.formService.isFresher = true;
    // });

    // (document.getElementById('experienced-radio') as HTMLElement).addEventListener('click', event => {
    //   this.isFresher = false;
    //   this.formService.isFresher = false;
    //   // if(this.isFresher){
    //   //   (document.getElementById('on-notice-period-yes-radio') as HTMLElement).click();
    //   // }
    // });

    // (document.getElementById('fresher-radio') as HTMLElement).click();
  }

  ngOnInit(): void {
    this.qualificationForm = new FormGroup({
      educationalQualification: new FormGroup({
        percentage: new FormControl(
          this.formService.qualificationVariable.educationalQualification.percentage,
          [Validators.max(99.99), Validators.min(35), Validators.required]
        ),
        yearOfPassing: new FormControl(
          this.formService.qualificationVariable.educationalQualification.yearOfPassing,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
          ]
        ),
        qualification: new FormControl(
          this.formService.qualificationVariable.educationalQualification.qualification,
          [Validators.required]
        ),
        stream: new FormControl(
          this.formService.qualificationVariable.educationalQualification.stream,
          [Validators.required]
        ),
        college: new FormControl(
          this.formService.qualificationVariable.educationalQualification.college,
          [Validators.required]
        ),
        otherCollege: new FormControl(
          this.formService.qualificationVariable.educationalQualification.otherCollege
        ),
        collegeLocation: new FormControl(
          this.formService.qualificationVariable.educationalQualification.collegeLocation,
          [Validators.required, Validators.maxLength(20)]
        ),
      }),
      professionalQualification: new FormGroup({
        applicantType: new FormControl(
          this.formService.qualificationVariable.professionalQualification.applicantType
          // [Validators.required]
        ),
        fresher: new FormGroup({
          familiarTech: new FormArray(
            this.formService.qualificationVariable.professionalQualification
              .fresher?.familiarTech as FormControl[]
          ),
          otherFamiliartech: new FormControl(
            this.formService.qualificationVariable.professionalQualification.fresher.otherFamiliartech
          ),
          zeusTestBool: new FormControl(
            this.formService.qualificationVariable.professionalQualification.fresher.zeusTestBool
          ),
          previouslyAppliedRole: new FormControl(
            this.formService.qualificationVariable.professionalQualification.fresher.previouslyAppliedRole
          ),
        }),
        experienced: new FormGroup({
          yearOfExperience: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.yearOfExperience,
            [Validators.required, Validators.min(1)]
          ),
          currentCTC: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.currentCTC,
            [Validators.required]
          ),
          expectedCTC: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.expectedCTC,
            [Validators.required]
          ),
          expertisedTech: new FormArray(
            this.formService.qualificationVariable.professionalQualification
              .experienced?.expertisedTech as FormControl[]
          ),
          otherExpertisedTech: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.otherExpertisedTech
          ),
          familiarTech: new FormArray(
            this.formService.qualificationVariable.professionalQualification
              .experienced?.familiarTech as FormControl[]
          ),
          otherFamiliartech: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.otherFamiliartech
          ),
          onNoticePeriod: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.onNoticePeriod
          ),
          noticePeriodEndDate: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.noticePeriodEndDate,
            [Validators.required]
          ),
          noticePeriodDuration: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.noticePeriodDuration,
            [Validators.required]
          ),
          zeusTestBool: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.zeusTestBool
          ),
          previouslyAppliedRole: new FormControl(
            this.formService.qualificationVariable.professionalQualification.experienced.previouslyAppliedRole
          ),
        }),
      }),
    });

    this.formService.getEducationalInformation().subscribe(() => {
    });

    this.qualificationForm.valueChanges.subscribe((e) => {
      // console.log(
      //   this.qualificationForm.get('professionalQualification.applicantType')
      //     ?.value
      // );
      // console.log(
      //   this.qualificationForm.get('educationalQualification')?.valid
      // );
      // console.log(
      //   this.qualificationForm.get(
      //     'professionalQualification.fresher.familiarTech'
      //   )?.value.length > 0
      // );
      // console.log(
      //   !(
      //     this.qualificationForm.get('educationalQualification')?.valid &&
      //     this.qualificationForm.get(
      //       'professionalQualification.fresher.familiarTech'
      //     )?.value.length > 0
      //   )
      // );
      // console.log('---');
    });
  }

  onCheckboxChange(e: any, applicantType: string) {
    const checkArray: FormArray = this.qualificationForm.get(
      `professionalQualification.${applicantType}`
    ) as FormArray;
    console.log(checkArray);
    if (e.target.checked) {
      checkArray.push(new FormControl(+e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get applicantType() {
    // console.log(this.qualificationForm.get('professionalQualification.applicantType')?.value)
    return this.qualificationForm.get('professionalQualification.applicantType')
      ?.value;
  }

  routeToPersonalInformation() {
    // this.router.navigateByUrl('register')
    this.saveState();
    this.localEventEmitter.emit({
      name: 'qualifications',
      data: '',
      direction: 'previous',
    });
  }

  routeToReviewProceded() {
    // this.router.navigateByUrl('register/review')
    this.saveState();
    this.localEventEmitter.emit({
      name: 'qualifications',
      data: '',
      direction: 'next',
    });
    console.log(this.qualificationForm);
  }

  saveState() {
    console.log(1);
    console.log();
    this.formService.qualificationVariable.educationalQualification =
      this.qualificationForm.get('educationalQualification')?.value;
    console.log(
      this.qualificationForm.get('professionalQualification.applicantType')
        ?.value
    );

    this.formService.qualificationVariable.professionalQualification.applicantType =
      this.qualificationForm.get(
        'professionalQualification.applicantType'
      )?.value;
    this.formService.qualificationVariable.professionalQualification.fresher =
      this.qualificationForm.get('professionalQualification.fresher')?.value;
    this.formService.qualificationVariable.professionalQualification.experienced =
      this.qualificationForm.get(
        'professionalQualification.experienced'
      )?.value;
    console.log(
      this.formService.qualificationVariable.professionalQualification
        .applicantType
    );
  }
}

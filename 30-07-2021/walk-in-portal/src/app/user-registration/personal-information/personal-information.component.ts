import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IJobRole } from 'src/app/models/job-role.model';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  isLoading = true;
  @Output() localEventEmitter = new EventEmitter();
  personalInformationForm!: FormGroup;

  constructor(
    public formService: FormServiceService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.formService.getJobRoles().subscribe(() => {
      this.isLoading = false;
    });
    this.personalInformationForm = new FormGroup({
      firstName: new FormControl(
        this.formService.personalInformationVariable.firstName,
        [Validators.required, Validators.maxLength(15), Validators.minLength(3)]
      ),
      lastName: new FormControl(
        this.formService.personalInformationVariable.lastName,
        [Validators.required, Validators.maxLength(15), Validators.minLength(3)]
      ),
      email: new FormControl(
        this.formService.personalInformationVariable.email,
        [Validators.required, Validators.email]
      ),
      phoneCode: new FormControl(
        this.formService.personalInformationVariable.phoneCode,
        [Validators.required, Validators.maxLength(3), Validators.minLength(2)]
      ),
      phoneNumber: new FormControl(
        this.formService.personalInformationVariable.phoneNumber,
        [Validators.required, Validators.maxLength(12), Validators.minLength(4)]
      ),
      resume: new FormControl(
        this.formService.personalInformationVariable.resume
      ),
      portfolioURL: new FormControl(
        this.formService.personalInformationVariable.portfolioURL,
        [Validators.maxLength(20)]
      ),
      referral: new FormControl(
        this.formService.personalInformationVariable.referral,
        [Validators.maxLength(10)]
      ),
      displayPicture: new FormControl(
        this.formService.personalInformationVariable.displayPicture
      ),
      jobRoles: new FormArray(
        this.formService.personalInformationVariable.jobRoles
      ),
      subscription: new FormControl(
        this.formService.personalInformationVariable.subscription
      ),
    });

    // console.log(document.querySelectorAll('.item-job-role-checkbox-input'))
    // console.log(Array.from(document.querySelectorAll('.item-job-role-checkbox-input')))
    // setTimeout(() => {
    //   Array.from(document.querySelectorAll('.item-job-role-checkbox-input')).forEach((item:any) => {
    //     console.log(item.checked);
    //   })
    // },5000);

    // console.log(!this.personalInformationForm.valid);
    // console.log(this.personalInformationForm.get('resume')?.value  ,
    // this.personalInformationForm.get('displayPicture')?.value  ,
    // this.personalInformationForm.get('jobRoles')?.value.length === 0)

    // this.personalInformationForm.valueChanges.subscribe(e => {
    //   console.log(e)
    //   console.log(!!this.personalInformationForm.get('resume')?.value  ,
    //   !!this.personalInformationForm.get('displayPicture')?.value  ,
    //   !!this.personalInformationForm.get('jobRoles')?.value.length)
    // })
  }

  // getResume(event:any){
  //   console.log((this.personalInformationForm.get('resume') as FormControl))
  // }
  handleResumeFileInput(event: any) {
    try {
      console.log(event);
      this.personalInformationForm.get('resume')?.setValue({
        name: event.target.files[0].name,
        data: event.target.files[0],
      });
    } catch (e) {}
  }

  handleImageFileInput(event: any) {
    try {
      console.log(event);
      console.log(event.target.files[0]);
      // this.personalInformationForm.patchValue({
      //   displayPicture:val.target.files[0]
      // })
      var objectURL = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(event.target.files[0])
      );
      this.personalInformationForm
        .get('displayPicture')
        ?.setValue({ url: objectURL, data: event.target.files[0] });
    } catch (e) {
      // this.personalInformationForm.get('displayPicture')?.setValue('');
    }
  }

  get displayPictureURL() {
    return (this.personalInformationForm.get('displayPicture') as FormControl)
      .value.url;
  }

  get resume() {
    return (this.personalInformationForm.get('resume') as FormControl).value
      .name;
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.personalInformationForm.get(
      'jobRoles'
    ) as FormArray;

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

  // updateJobRoleArray() {
  //   this.formService.personalInformationVariable.jobRoles = [];
  //   // console.log(document.querySelectorAll('.job-role-pi-input'))
  //   Array.from(document.querySelectorAll('.job-role-pi-input')).forEach(
  //     (item: any, index: number) => {
  //       // console.log(index)
  //       // console.log(this.formService.personalInformationVariable.jobRoles[0])
  //       if (this.formService.personalInformationVariable.jobRoles[index]) {
  //         item.checked =
  //           this.formService.personalInformationVariable.jobRoles[index];
  //       }
  //       this.formService.personalInformationVariable.jobRoles.push(
  //         item.checked
  //       );
  //     }
  //   );
  // }
  // updateSubscription() {
  //   this.formService.personalInformationVariable.subscription = (
  //     document.querySelector('.item-subscription-checkbox-input') as any
  //   ).checked;
  // }

  routeToQualifications() {
    this.formService.personalInformationVariable =
      this.personalInformationForm.value;
    console.log(this.personalInformationForm);
    this.localEventEmitter.emit({
      name: 'personalInformation',
      value: this.personalInformationForm,
    });
  }
}

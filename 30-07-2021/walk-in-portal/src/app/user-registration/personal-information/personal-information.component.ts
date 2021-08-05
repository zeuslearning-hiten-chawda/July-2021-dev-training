import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  
  constructor(public formService:FormServiceService) { }

  ngOnInit(): void {

    console.log(document.querySelectorAll('.item-job-role-checkbox-input'))
    console.log(Array.from(document.querySelectorAll('.item-job-role-checkbox-input')))
    // setTimeout(() => {
    //   Array.from(document.querySelectorAll('.item-job-role-checkbox-input')).forEach((item:any) => {
    //     console.log(item.checked);
    //   })
    // },5000);

  }

  updateJobRoleArray(){
    this.formService.personalInformationVariable.jobRoles = [];
    Array.from(document.querySelectorAll('.item-job-role-checkbox-input')).forEach((item:any) => {
      this.formService.personalInformationVariable.jobRoles.push(item.checked);
    })
  }
  updateSubscription(){
    this.formService.personalInformationVariable.subscription =
    (document.querySelector('.item-subscription-checkbox-input') as any).checked;
  }
}

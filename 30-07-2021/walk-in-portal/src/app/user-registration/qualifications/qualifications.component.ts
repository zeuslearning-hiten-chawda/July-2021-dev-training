import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {
  isFresher:boolean = false;

  constructor(private formService:FormServiceService) { }

  ngOnInit(): void {


    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

    accordionItemHeaders.forEach(item => {
      item.addEventListener('click', event => {
        item.classList.toggle('active');
      })
    });


    (document.getElementById('fresher-radio') as HTMLElement).addEventListener('click', event => {
      this.isFresher = true;
      this.formService.isFresher = true;
    });

    (document.getElementById('experienced-radio') as HTMLElement).addEventListener('click', event => {
      this.isFresher = false;
      this.formService.isFresher = false;
      // if(this.isFresher){
      //   (document.getElementById('on-notice-period-yes-radio') as HTMLElement).click();
      // }
    });

    (document.getElementById('fresher-radio') as HTMLElement).click();

  }

}

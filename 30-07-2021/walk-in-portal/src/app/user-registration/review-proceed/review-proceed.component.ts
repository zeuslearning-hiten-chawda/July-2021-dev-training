import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-review-proceed',
  templateUrl: './review-proceed.component.html',
  styleUrls: ['./review-proceed.component.css']
})
export class ReviewProceedComponent implements OnInit {
  isFresher:any;
  constructor(private formService:FormServiceService) { }

  ngOnInit(): void {
    this.isFresher = this.formService.isFresher;
    console.log(this.formService.isFresher);
  }

}

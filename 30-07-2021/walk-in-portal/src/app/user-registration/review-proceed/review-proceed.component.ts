import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-review-proceed',
  templateUrl: './review-proceed.component.html',
  styleUrls: ['./review-proceed.component.css']
})
export class ReviewProceedComponent implements OnInit {
  // isFresher:any;
  @Output() localEventEmitter = new EventEmitter;

  constructor(public formService:FormServiceService,private router:Router) { }

  ngOnInit(): void {
    // this.isFresher = this.formService.isFresher;
    // console.log(this.formService.qualificationVariable);
    // console.log()
   
  }

  routeToQualifications(){
    this.localEventEmitter.emit({name:"reviewProceed"})
    // this.router.navigateByUrl('register/qualifications')
  }
}

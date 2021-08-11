import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit {

  constructor(public formService:FormServiceService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';
import { WalkinServiceService } from 'src/app/services/walkin-service.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css'],
})
export class ListingPageComponent implements OnInit {
  constructor(
    public formService: FormServiceService,
    public walkinService: WalkinServiceService
  ) {}

  ngOnInit(): void {
    this.walkinService.getWalkin();
  }

  getCities(array: any[]) {
    let cities:string[] = [];
    array.forEach((item) => {
      cities.push(item.title);
    });
    return cities.join(' , ');
  }
}

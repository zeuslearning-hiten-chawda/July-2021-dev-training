import { Component, OnInit } from '@angular/core';
import { WalkinServiceService } from 'src/app/services/walkin-service.service';

@Component({
  selector: 'app-walk-in-application-success-page',
  templateUrl: './walk-in-application-success-page.component.html',
  styleUrls: ['./walk-in-application-success-page.component.css']
})
export class WalkInApplicationSuccessPageComponent implements OnInit {

  constructor(public walkinService:WalkinServiceService) { }

  ngOnInit(): void {
  }

}

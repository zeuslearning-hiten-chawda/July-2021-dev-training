import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormServiceService } from './form-service.service';
import { WalkinServiceService } from './walkin-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    FormServiceService,
    WalkinServiceService
  ]
})
export class ServicesModule { }

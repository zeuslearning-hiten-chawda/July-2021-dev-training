import { Injectable } from '@angular/core';
import { IPersonalInformation } from '../models/person-information-model';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  isFresher:boolean = true;
  personalInformationVariable:IPersonalInformation = {
    firstName:"",
    lastName:"",
    email:"",
    phoneCode:"",
    phoneNumber:"",
    resume:"",
    portfolioURL:"",
    jobRoles:[false,false,false],
    referral:"",
    subscription:false,
    displayPicture:"",
  };



  constructor() { }

  // get isFresher():boolean{
  //   return this._isFresher;
  // }

  // set isFresher(data:boolean){
  //   this._isFresher = data;
  // }
}

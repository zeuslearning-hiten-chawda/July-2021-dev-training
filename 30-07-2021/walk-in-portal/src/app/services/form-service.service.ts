import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEducationalQualification } from '../models/educational-qualification.model';
import { IJobRole } from '../models/job-role.model';
import { IPersonalInformation } from '../models/person-information.model';
import { IProfessionalQualification } from '../models/professional-qualification.model';
import { IWalkIn } from '../models/walk-in.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  userId:string | undefined = undefined;
  baseUrl = 'http://localhost:3000/';
  jobRolesFetched: IJobRole[] = [];
  yearOfPassingFetched = [2017, 2018, 2019, 2020, 2021];
  qualificationFetched: any[] = [];
  streamFetched: any[] = [];
  collegeFetched: any[] = [];
  technologyFetched: any[] = [];
  applicantTypeArray = ['Fresher', 'Experienced'];
  noticePeriodDurationFetched = [2, 3, 4, 5, 6, 7];
  isFresher: boolean = true;
  personalInformationVariable: IPersonalInformation = {
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '',
    phoneNumber: '',
    resume: '',
    portfolioURL: '',
    jobRoles: [],
    referral: '',
    displayPicture: '',
    subscription: false,
  };
  qualificationVariable: {
    educationalQualification: IEducationalQualification;
    professionalQualification: IProfessionalQualification;
  } = {
    educationalQualification: {
      percentage: undefined,
      yearOfPassing: undefined,
      qualification: '',
      stream: '',
      college: '',
      otherCollege: '',
      collegeLocation: '',
    },
    professionalQualification: {
      applicantType: this.applicantTypeArray[0],
      fresher: {
        familiarTech: [],
        otherFamiliartech: '',
        zeusTestBool: false,
        previouslyAppliedRole: '',
      },
      experienced: {
        yearOfExperience: undefined,
        currentCTC: undefined,
        expectedCTC: undefined,
        expertisedTech: [],
        otherExpertisedTech: '',
        familiarTech: [],
        otherFamiliartech: '',
        onNoticePeriod: false,
        noticePeriodEndDate: '',
        noticePeriodDuration: undefined,
        zeusTestBool: false,
        previouslyAppliedRole: '',
      },
    },
  };
  yesNoArray = [true, false];

  reviewQualification:undefined;
  reviewCollege:undefined;
  reviewStream:undefined;
  reviewFamiliarTech:undefined | any[];
  reviewExpertisedTech:undefined | any[];
  reviewPreferredJobRoles:undefined | any[];

  constructor(private http: HttpClient) {}

  loginUser(email:string,password:string){
    return this.http.post(`${this.baseUrl}login`, {email,password_hash:password}, {responseType:"json"})
  }

  addUser(userData:any) {
    return this.http.post(`${this.baseUrl}register`, userData, {
      responseType: 'json',
    });
  }

  getJobRoles() {
    return this.http
      .get(`${this.baseUrl}job-roles`, { responseType: 'json' })
      .pipe(
        tap((res: any) => {
          console.log(res[0]);
          this.jobRolesFetched = [];
          for (const item of res[0]) {
            this.jobRolesFetched.push({
              id: item['job_role_id'],
              title: item['job_role'],
            });
          }
          console.log(this.jobRolesFetched);
        })
      );
  }

  getEducationalInformation() {
    return this.http
      .get(`${this.baseUrl}qualification-information`, { responseType: 'json' })
      .pipe(
        tap((res: any) => {
          console.log(res[0]);
          this.qualificationFetched = [];
          for (const item of res[0]) {
            this.qualificationFetched.push({
              id: item['qualification_id'],
              title: item['qualification'],
            });
          }
          console.log(this.qualificationFetched);
          this.streamFetched = [];
          for (const item of res[1]) {
            this.streamFetched.push({
              id: item['stream_id'],
              title: item['stream_name'],
            });
          }
          console.log(this.streamFetched);
          this.collegeFetched = [];
          for (const item of res[2]) {
            this.collegeFetched.push({
              id: item['college_id'],
              title: item['college_name'],
            });
          }
          console.log(this.collegeFetched);
          this.technologyFetched = [];
          for (const item of res[3]) {
            this.technologyFetched.push({
              id: item['technology_id'],
              title: item['technology_name'],
            });
          }
          this.technologyFetched.push({
            id: 0,
            title: 'Others',
          });
          console.log(this.technologyFetched);
        })
      );
  }
  // get isFresher():boolean{
  //   return this._isFresher;
  // }

  // set isFresher(data:boolean){
  //   this._isFresher = data;
  // }
}

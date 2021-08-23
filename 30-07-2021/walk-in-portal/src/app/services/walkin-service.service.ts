import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IWalkIn } from '../models/walk-in.model';
import { FormServiceService } from './form-service.service';

@Injectable({
  providedIn: 'root',
})
export class WalkinServiceService {
  baseUrl = 'http://localhost:3000/';
  walkInVariable: IWalkIn[] = [];
  successVariable: any = {};
  constructor(
    private http: HttpClient,
    private formService: FormServiceService,
    private router: Router
  ) {}

  postApplication(
    walkInJobId: number,
    timeSlotId: number,
    jobRoles: any[],
    updatedResume: any,
    startDate: any,
    timeSlotValue: any
  ) {
    console.log(walkInJobId);
    console.log(timeSlotId);
    console.log(jobRoles);
    console.log(updatedResume.data);
    console.log(this.formService.userId);
    console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
    this.http
      .post(
        `${this.baseUrl}application`,
        {
          personalInformationId: this.formService.userId,
          walkInJobId: walkInJobId,
          date: new Date().toJSON().slice(0, 10),
          timeSlotId: timeSlotId,
          jobRoles: jobRoles,
          updatedResume: updatedResume.data,
        },
        { responseType: 'json' }
      )
      .subscribe((res) => {
        console.log(res);
        this.successVariable = {
          date: startDate,
          timeSlotValue: timeSlotValue,
        };
        console.log(this.successVariable);
        this.router.navigateByUrl('/walkin/success');
      });
  }

  getWalkinDetail(id: any) {
    return this.http.get(`${this.baseUrl}walkin/${id}`, {
      responseType: 'json',
    });
  }

  getWalkin() {
    this.http.get(`${this.baseUrl}walkin`, { responseType: 'json' }).subscribe(
      (result) => {
        this.walkInVariable = [];
        console.log(Array.from(result as any)[0]);
        console.log(Array.from(result as any)[1]);
        for (const item of Array.from(result as any)[0] as []) {
          // console.log(item)
          let walkin = {
            id: item['walk_in_jobs_id'],
            title: item['title'],
            startDate: item['start_date'],
            endDate: item['end_date'],
            city: [] as any,
            internshipInformation: item['internshipInformation'],
            expiryDays: item['expiry_days'],
            jobRoles: [] as any,
          };
          for (const city of Array.from(result as any)[1] as []) {
            if (walkin.id === city['walk_in_jobs_id']) {
              walkin.city.push({
                id: city['city_id'],
                title: city['city'],
              } as any);
            }
          }
          for (const jobrole of Array.from(result as any)[2] as []) {
            if (walkin.id === jobrole['walk_in_jobs_id']) {
              walkin.jobRoles.push({
                id: jobrole['job_roles_id'],
                title: jobrole['job_role'],
              } as any);
            }
          }
          this.walkInVariable.push(walkin);
        }
        console.log(this.walkInVariable);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IWalkInDetail } from 'src/app/models/walk-in-detail.model';
import { WalkinServiceService } from 'src/app/services/walkin-service.service';

@Component({
  selector: 'app-walk-in-details-page',
  templateUrl: './walk-in-details-page.component.html',
  styleUrls: ['./walk-in-details-page.component.css'],
})
export class WalkInDetailsPageComponent implements OnInit {
  isLoading = true;
  checkArray = true;
  walkInDetailVariable!: IWalkInDetail;
  walkInDetailForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private walkinService: WalkinServiceService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    console.log(this.route.snapshot.paramMap.get('walkinID'));
    this.walkinService
      .getWalkinDetail(this.route.snapshot.paramMap.get('walkinID'))
      .subscribe(
        (result) => {
          console.log(result);
          console.log((Array.from(result as any)[0] as any[])[0]);
          console.log(Array.from(result as any)[1]);
          console.log(Array.from(result as any)[2]);
          let item = (Array.from(result as any)[0] as any[])[0];
          let walkin = {
            id: item['walk_in_jobs_id'],
            title: item['title'],
            startDate: item['start_date'],
            endDate: item['end_date'],
            city: [] as any,
            internshipInformation: item['internshipInformation'],
            expiryDays: item['expiry_days'],
            generalInstructions: item['general_instructions'],
            examInstructions: item['exam_instructions'],
            minimumSystemRequirements: item['system_requirements'],
            process: item['process'],
            jobRoles: [] as any,
            timeSlots: [] as any,
          };
          for (const jobrole of Array.from(result as any)[1] as []) {
            if (walkin.id === jobrole['job_id']) {
              walkin.jobRoles.push({
                id: jobrole['job_role_id'],
                title: jobrole['job_role'],
                grossPackage: jobrole['gross_package'],
                roleDescription: jobrole['description'],
                requirements: jobrole['requirements'],
              } as any);
            }
          }
          for (const timeSlot of Array.from(result as any)[2] as []) {
            if (walkin.id === timeSlot['walk_in_jobs_id']) {
              walkin.timeSlots.push({
                id: timeSlot['time_slots_id'],
                startTime: timeSlot['start_time'],
                endTime: timeSlot['end_time'],
              });
            }
          }
          for (const city of Array.from(result as any)[3] as []) {
            if (walkin.id === city['walk_in_jobs_id']) {
              walkin.city.push({
                id: city['city_id'],
                title: city['city'],
              } as any);
            }
          }
          this.walkInDetailVariable = walkin;
          console.log(walkin);
          this.isLoading = false;

          setTimeout(() => {
            const accordionItemHeaders = document.querySelectorAll(
              '.accordion-item-header'
            );
            console.log(accordionItemHeaders);
            accordionItemHeaders.forEach((item) => {
              item.addEventListener('click', (event) => {
                item.classList.toggle('active');
              });
            });
          }, 0);

          this.walkInDetailForm = new FormGroup({
            timeSlot: new FormControl(walkin.timeSlots[0].id, [
              Validators.required,
            ]),
            jobRolesPreference: new FormArray([], [Validators.required]),
            updatedResume: new FormControl(''),
          });

          walkin.jobRoles.forEach((item: any) => {
            this.jobRolesPreference.push(new FormControl(false));
          });

          this.walkInDetailForm.valueChanges.subscribe((val) => {
            console.log(val);
            this.checkArray = val.jobRolesPreference.every(
              (e: any) => e === false
            );
          });
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }
  get jobRolesPreference(): any {
    return this.walkInDetailForm.get('jobRolesPreference') as FormArray;
  }
  get timeSlot(): any {
    return this.walkInDetailForm.get('timeSlot');
  }
  get updatedResume(): any {
    return this.walkInDetailForm.get('updatedResume');
  }

  applyForJob() {
    console.log(this.walkInDetailForm);
    console.log(this.walkInDetailForm.get('timeSlot')!.value);
    console.log(this.walkInDetailForm.get('updatedResume')!.value);
    let jobRolesArr: any[] = [];
    this.walkInDetailForm
      .get('jobRolesPreference')!
      .value.forEach((item: any, index: any) => {
        if (item) {
          jobRolesArr.push(this.walkInDetailVariable.jobRoles[index].id);
        }
      });
    console.log(jobRolesArr);

    let timeSlotValue = '';
    this.walkInDetailVariable.timeSlots.forEach((item) => {
      if (item.id === this.walkInDetailForm.get('timeSlot')!.value) {
        timeSlotValue = item.startTime + ' to ' + item.endTime;
        console.log(item);
        return;
      }
    });

    this.walkinService.postApplication(
      this.walkInDetailVariable.id,
      this.walkInDetailForm.get('timeSlot')!.value,
      jobRolesArr,
      this.walkInDetailForm.get('updatedResume')!.value,
      this.walkInDetailVariable.startDate,
      timeSlotValue
    );
  }
  getCities(array: any[]) {
    let cities: string[] = [];
    array.forEach((item) => {
      cities.push(item.title);
    });
    return cities.join(' , ');
  }

  handleResumeFileInput(event: any) {
    try {
      console.log(event);
      this.updatedResume.setValue({
        name: event.target.files[0].name,
        data: event.target.files[0],
      });
    } catch (e) {}
  }
}

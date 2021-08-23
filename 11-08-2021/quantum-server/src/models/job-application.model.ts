/** @format */

export class JobApplication {
  private _personalInformationId: string;
  private _walkInJobId: number;
  private _date: string;
  private _timeSlotId: number;
  private _jobRoles: any[];
  private _updatedResume: any;

  constructor(
    personalInformationId: string,
    walkInJobId: number,
    date: string,
    timeSlotId: number,
    jobRoles: any[],
    updatedResume: any
  ) {
    this._personalInformationId = personalInformationId;
    this._walkInJobId = walkInJobId;
    this._date = date;
    this._timeSlotId = timeSlotId;
    this._jobRoles = jobRoles;
    this._updatedResume = updatedResume;
  }

  public get updatedResume(): any {
    return this._updatedResume;
  }

  public set updatedResume(updatedResume: any) {
    this._updatedResume = updatedResume;
  }

  public get personalInformationId(): string {
    return this._personalInformationId;
  }

  public set personalInformationId(personalInformationId: string) {
    this._personalInformationId = personalInformationId;
  }

  public get walkInJobId(): number {
    return this._walkInJobId;
  }

  public set walkInJobId(walkInJobId: number) {
    this._walkInJobId = walkInJobId;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }

  public get timeSlotId(): number {
    return this._timeSlotId;
  }

  public set timeSlotId(timeSlotId: number) {
    this._timeSlotId = timeSlotId;
  }

  public get jobRoles(): any[] {
    return this._jobRoles;
  }

  public set jobRoles(jobRoles: any[]) {
    this._jobRoles = jobRoles;
  }
}

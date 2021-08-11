import { IJobRole } from "./job-role.model";

export interface IWalkIn{
  title:string;
  startDate:string;
  endDate:string;
  jobRoles:IJobRole[];
  city:string;
  internshipInformation?:string;
  expiryDate:string;
}

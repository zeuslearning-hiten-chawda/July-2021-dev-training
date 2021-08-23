import { IJobRoleDetail } from './job-role-detail.model';
import { IJobRole } from './job-role.model';

export interface IWalkIn {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  jobRoles:IJobRole[] & IJobRoleDetail[];
  city: any[];
  internshipInformation?: string;
  expiryDays: number;
}

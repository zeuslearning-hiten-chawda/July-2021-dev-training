import { IJobRole } from "./job-role.model";

export interface IJobRoleDetail extends IJobRole{
  grossPackage:number;
  roleDescription:string;
  requirements:string;
}

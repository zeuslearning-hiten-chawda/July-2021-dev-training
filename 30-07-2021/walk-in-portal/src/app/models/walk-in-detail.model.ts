import { IWalkIn } from "./walk-in.model";

export interface IWalkInDetail extends IWalkIn{
  timeSlots:any[],
  generalInstructions:string,
  examInstructions:string,
  minimumSystemRequirements:string,
  process:string
}

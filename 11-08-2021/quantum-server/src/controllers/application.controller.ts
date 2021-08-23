/** @format */

import Application from "../models/application.model";
import { JobApplication } from "../models/job-application.model";
import jobApplicationSchema from "../schema/job-application.schema";

export class ApplicationController {
  static postJobApplication = async (req: any, res: any, next: any) => {
    try {
      const result = jobApplicationSchema.validate(req.body);
      if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
      }
      console.log("executed");
      let object = new JobApplication(
        result.value.personalInformationId,
        result.value.walkInJobId,
        result.value.date,
        result.value.timeSlotId,
        result.value.jobRoles,
        result.value.updatedResume
      );

      const [data] = await Application.postApplication(object);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  };
}

export default ApplicationController;

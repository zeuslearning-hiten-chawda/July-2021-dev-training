/** @format */

import db from "../util/helper";
import { JobApplication } from "./job-application.model";
export class Application {
  static postApplication(data: JobApplication) {
    return db.execute("CALL JobApplication(?,?,?,?,?,?)", [
      data.personalInformationId,
      data.walkInJobId,
      data.date,
      data.timeSlotId,
      data.jobRoles.join(","),
      data.updatedResume
    ]);
  }
}

export default Application;

/** @format */
import db from "../util/helper";
export class JobRoles {
  static getAll() {
    return db.execute("CALL getJobRoles()");
  }
}

export default JobRoles;

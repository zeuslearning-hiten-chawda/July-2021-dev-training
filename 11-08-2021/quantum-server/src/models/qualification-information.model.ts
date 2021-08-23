/** @format */
import db from "../util/helper";
export class QualificationInformation {
  static getAll() {
    return db.execute("CALL getQualificationInformations()");
  }
}

export default QualificationInformation;

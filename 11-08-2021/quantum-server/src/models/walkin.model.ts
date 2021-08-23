/** @format */
import db from "../util/helper";
export class Walkin {
  static getAll() {
    return db.execute("CALL GetWalkInJobs()");
  }
  static getOne(id:number){
    return db.execute("CALL GetWalkInJobById(?)",[id]);
  }
}

export default Walkin;

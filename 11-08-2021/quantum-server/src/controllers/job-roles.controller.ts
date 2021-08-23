/** @format */

import JobRoles from "../models/job-roles.model";

export class JobRolesController {
  static getJobRoles = async (req: any, res: any, next: any) => {
    try {
      const [data] = await JobRoles.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error");
    }
    // res.send(Grocery.fetchAll());
  };
}

export default JobRolesController;

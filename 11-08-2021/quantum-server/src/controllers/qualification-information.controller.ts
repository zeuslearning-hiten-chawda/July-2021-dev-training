import QualificationInformation from "../models/qualification-information.model";


/** @format */

export class QualificationInformationController {
  static getQualifications = async (req: any, res: any, next: any) => {
    try {
      const [data] = await QualificationInformation.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error");
    }
    // res.send(Grocery.fetchAll());
  };
  
}

export default QualificationInformationController;

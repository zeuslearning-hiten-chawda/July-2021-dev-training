import Walkin from "../models/walkin.model";
export class WalkinController{
  static getAllWalkin = async (req: any, res: any, next: any) => {
    try {
      const [data] = await Walkin.getAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error");
    }
    // res.send(Grocery.fetchAll());
  };
  static getOneWalkin = async (req: any, res: any, next: any) => {
    try {
      const [data] = await Walkin.getOne(req.params.id);
      if((Array.from(data as any)[0] as any).length === 0){
        res.status(400).send("No data found with the given ID.")
        return;
      }
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error");
    }
    // res.send(Grocery.fetchAll());
  };
}


export default  WalkinController;

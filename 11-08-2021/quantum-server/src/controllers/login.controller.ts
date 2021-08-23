/** @format */

import Login from "../models/login.model";
import { User } from "../models/user.model";
import loginSchema from "../schema/login.schema";

/** @format */

export class LoginController {
  static validateUser = async (req: any, res: any, next: any) => {
    try {
      const result = loginSchema.validate(req.body);
      if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
      }
      let object = new User(result.value.email, result.value.password_hash);
      const [data] = await Login.validate(object);
      let count = (data as any[])[0][0]["count"];
      let user_id = (data as any[])[0][0]["user_id"];
      res.status(200).json({exist:Boolean(count),user_id});
    } catch (err) {
      res.status(500).send(err);
    }
    // res.send(Grocery.fetchAll());
  };
}

export default LoginController;

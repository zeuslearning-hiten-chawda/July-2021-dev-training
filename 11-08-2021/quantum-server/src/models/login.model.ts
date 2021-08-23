/** @format */

import db from "../util/helper";
import { User } from "./user.model";
export class Login {
  static validate(user: User) {
    return db.execute("CALL validateUser(?,?)", [
      user.email,
      user.password_hash,
    ]);
  }
}

export default Login;

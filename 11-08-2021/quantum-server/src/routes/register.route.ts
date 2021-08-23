/** @format */

import Express from "express";
import RegisterController from "../controllers/register.controller";

const RegisterRoute = Express.Router();
// RegisterRoute.post(
//     "/fresher/",
//     RegisterController.postFresher
//   );
// RegisterRoute.post(
//   "/education-qualification/",
//   RegisterController.postEducationalQualification
// );
// RegisterRoute.post("/", RegisterController.postPersonalInformation);
RegisterRoute.post("/", RegisterController.postUser);

export default RegisterRoute;

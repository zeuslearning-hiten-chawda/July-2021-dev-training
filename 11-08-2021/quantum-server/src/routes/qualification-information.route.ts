
import Express from "express";
import QualificationInformationController from "../controllers/qualification-information.controller";


const  QualificationInformationRoute= Express.Router();
QualificationInformationRoute.get("/", QualificationInformationController.getQualifications);


export default QualificationInformationRoute;

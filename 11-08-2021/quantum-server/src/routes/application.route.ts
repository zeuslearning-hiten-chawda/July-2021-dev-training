import Express from "express";
import ApplicationController from "../controllers/application.controller";


const ApplicationRoute = Express.Router();
ApplicationRoute.post("/", ApplicationController.postJobApplication);

export default ApplicationRoute;

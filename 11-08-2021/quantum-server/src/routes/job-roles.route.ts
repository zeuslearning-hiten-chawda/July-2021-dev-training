
import Express from "express";
import JobRolesController from "../controllers/job-roles.controller";

const JobRolesRoute = Express.Router();
JobRolesRoute.get("/", JobRolesController.getJobRoles);

export default JobRolesRoute;

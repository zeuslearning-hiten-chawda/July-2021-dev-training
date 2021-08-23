/** @format */

import Express from "express";
import WalkinController from "../controllers/walkin.controller";

const WalkinRoute = Express.Router();
WalkinRoute.get("/", WalkinController.getAllWalkin);
WalkinRoute.get("/:id", WalkinController.getOneWalkin);

export default WalkinRoute;

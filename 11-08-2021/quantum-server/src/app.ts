/** @format */

import Express from "express";
import WalkinRoute from "./routes/walkin.route";
import RegisterRoute from "./routes/register.route";
import JobRolesRoute from "./routes/job-roles.route";
import QualificationInformationRoute from "./routes/qualification-information.route";
import LoginRoute from "./routes/login.route";
import ApplicationRoute from "./routes/application.route";

const app = Express();
app.use(Express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/walkin", WalkinRoute);
app.use("/register", RegisterRoute);
app.use("/job-roles", JobRolesRoute);
app.use("/qualification-information", QualificationInformationRoute);
app.use("/login", LoginRoute);
app.use("/application", ApplicationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running on ${port}...`));

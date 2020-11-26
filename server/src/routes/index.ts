import { Application } from "express";
import { testApp } from "./TestRoutes";

export function activateSubApplications(app: Application) {
  app.use("/test", testApp);
}
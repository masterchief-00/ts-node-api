import express from "express";
import authenticationRoutes from "./authenticationRoutes";
import userRoutes from "./userRoutes";

const router = express.Router();

export default (): express.Router => {
  authenticationRoutes(router);
  userRoutes(router);
  return router;
};

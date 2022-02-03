import express from "express";
import { testOrder } from "../controllers/orderController.js";

const Router = express.Router();

Router.get("/test", testOrder);

export default Router;

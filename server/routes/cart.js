import express from "express";
import { testCart } from "../controllers/cartController.js";

const Router = express.Router();

Router.get("/test", testCart);

export default Router;

import express from "express";
import { testProduct } from "../controllers/productController.js";

const Router = express.Router();

Router.get("/test", testProduct);

export default Router;

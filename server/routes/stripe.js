import express from "express";

import { makePayment } from "../controllers/stripeController.js";

const Router = express.Router();

Router.post("/payment", makePayment);

export default Router;

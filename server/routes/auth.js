import express from "express";

import {
  testAuth,
  registerUser,
  loginUser,
} from "../controllers/authController.js";

const Router = express.Router();

Router.get("/test", testAuth);

//REGISTER
Router.post("/register", registerUser);

//LOGIN
Router.post("/login", loginUser);

export default Router;

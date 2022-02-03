import express from "express";
import {
  createCart,
  testCart,
  updateCart,
  deleteCart,
  getCart,
  getAllCarts,
} from "../controllers/cartController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/test", testCart);

Router.get("/", verifyTokenAndAdmin, getAllCarts);

Router.post("/", verifyToken, createCart);

Router.get("/:userId", verifyTokenAndAuthorization, getCart);

Router.put("/:id", verifyTokenAndAuthorization, updateCart);

Router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

export default Router;

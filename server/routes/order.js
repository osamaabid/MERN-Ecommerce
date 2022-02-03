import express from "express";
import {
  createOrder,
  testOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrders,
  getIncome,
} from "../controllers/orderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/test", testOrder);

Router.get("/", verifyTokenAndAdmin, getAllOrders);

Router.post("/", verifyToken, createOrder);

Router.get("/income", verifyTokenAndAdmin, getIncome);

Router.get("/:userId", verifyTokenAndAuthorization, getOrder);

Router.put("/:id", verifyTokenAndAdmin, updateOrder);

Router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

export default Router;

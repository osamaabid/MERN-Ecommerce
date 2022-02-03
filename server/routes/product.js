import express from "express";
import {
  createProduct,
  testProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  getProductStats,
} from "../controllers/productController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/test", testProduct);

Router.get("/", verifyTokenAndAdmin, getAllProducts);

Router.get("/stats", verifyTokenAndAdmin, getProductStats);

Router.post("/", verifyTokenAndAdmin, createProduct);

Router.get("/:id", verifyTokenAndAdmin, getProduct);

Router.put("/:id", verifyTokenAndAdmin, updateProduct);

Router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default Router;

import express from "express";
import {
  testUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserStats,
} from "../controllers/userController.js";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const Router = express.Router();

Router.get("/test", testUser);

Router.get("/", verifyTokenAndAdmin, getAllUsers);

Router.get("/stats", verifyTokenAndAdmin, getUserStats);

Router.get("/:id", verifyTokenAndAdmin, getUser);

Router.put("/:id", verifyTokenAndAdmin, updateUser);

Router.delete("/:id", verifyTokenAndAdmin, deleteUser);

export default Router;

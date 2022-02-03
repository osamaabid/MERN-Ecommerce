import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./database/db.js";
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/order.js";
import authRoutes from "./routes/auth.js";
import paymentRoutes from "./routes/stripe.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/checkout", paymentRoutes);

const PORT = process.env.PORT || 5000;

Connection(process.env.MONGO_DB_URL);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} `);
});

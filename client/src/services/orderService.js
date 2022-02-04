// import axios from "axios";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";

export const addOrder = async (userId, products, amount, address) => {
  try {
    let res = await userRequest.post(`/orders`, {
      userId,
      products: products.map((item) => ({
        productId: item._id,
        quantity: item._quantity,
      })),
      amount,
      address,
    });
    return res.data;
  } catch (err) {
    console.log("Create Order Api Error: ", err);
  }
};

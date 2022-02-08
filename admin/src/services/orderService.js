// import axios from "axios";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";
import { getToken } from "./tokenService.js";

export const addOrder = async (userId, products, amount, address) => {
  // console.log(getToken());
  let authToken = getToken();
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
    // console.log(userId, products, amount, address);
  } catch (err) {
    console.log("Create Order Api Error: ", err);
  }
};

export const getOrders = async () => {
  try {
    let res = await userRequest.get(`/orders`);
    return res.data;
    // console.log(userId, products, amount, address);
  } catch (err) {
    console.log("Create Order Api Error: ", err);
  }
};

export const getTotalIncome = async (pid = "") => {
  try {
    let res = pid
      ? await userRequest.get(`/orders/income?pid=${pid}`)
      : await userRequest.get(`/orders/income`);
    return res.data;
    // console.log(userId, products, amount, address);
  } catch (err) {
    console.log("Income Order Api Error: ", err);
  }
};

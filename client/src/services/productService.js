// import axios from "axios";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";

export const getProducts = async (category = "") => {
  try {
    let res = category
      ? await publicRequest.get(`/products?category=${category}`)
      : await publicRequest.get(`/products`);
    return res.data;
  } catch (err) {
    console.log("Get Products Api Error: ", err);
  }
};

export const getProductbyId = async (id) => {
  try {
    let res = await publicRequest.get(`/products/${id}`);
    return res.data;
  } catch (err) {
    console.log("Get Product By Id Api Error: ", err);
  }
};

// import axios from "axios";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} from "../redux/productRedux.js";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    let res = await publicRequest.get(`/products`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // let res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// export const getProductbyId = async (id) => {
//   try {
//     let res = await publicRequest.get(`/products/${id}`);
//     return res.data;
//   } catch (err) {
//     console.log("Get Product By Id Api Error: ", err);
//   }
// };

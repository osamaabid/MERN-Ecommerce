// import axios from "axios";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";

export const makePayment = async (stripeToken, amount) => {
  try {
    let res = await userRequest.post(`/checkout/payment`, {
      tokenId: stripeToken,
      amount: amount,
    });
    return res.data;
  } catch (err) {
    console.log("Make Payment Api Error: ", err);
  }
};

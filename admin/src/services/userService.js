import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { userRequest } from "../utilities/requestMethod.js";
import { setToken } from "./tokenService";

export const getUsers = async () => {
  try {
    const res = await userRequest.get("/users?new=true");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserStats = async () => {
  try {
    const res = await userRequest.get("/users/stats");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

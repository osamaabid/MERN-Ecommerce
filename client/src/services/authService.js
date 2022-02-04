import { loginFailure, loginStart, loginSuccess } from "../redux/userRedux";
import { publicRequest } from "../utilities/requestMethod.js";

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const registerUser = async (user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    return res.data;
  } catch (err) {
    console.log("Registe User Error");
  }
};

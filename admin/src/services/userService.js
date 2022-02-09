import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
} from "../redux/userRedux";
import { publicRequest, userRequest } from "../utilities/requestMethod.js";
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

export const getAllUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    let res = await userRequest.get(`/users`);
    console.log(res.data);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    // let res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (id, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    let res = await userRequest.put(`/users/${id}`, user);
    dispatch(updateUserSuccess({ id, user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const addUser = async (user, dispatch) => {
  dispatch(addUserStart());
  try {
    console.log(user);
    let res = await publicRequest.post(`/auth/register`, user);
    dispatch(addUserSuccess(res.data));
  } catch (err) {
    dispatch(addUserFailure());
  }
};

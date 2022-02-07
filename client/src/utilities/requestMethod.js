import axios from "axios";
import { getToken } from "../services/tokenService";
// import { APIURL } from "../data";

const BASE_URL = "http://localhost:5000/api/v1";

// const JWT =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmI4YTgwZjUzNThiODdhNmI2YmQzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDIzMDQ5MCwiZXhwIjoxNjQ0NDg5NjkwfQ.mw-WCMAF2t0MICF5UZaFkCpfkQkAFdEV25Ntw26RHes";

// let JWT = getToken();

// console.log(JWT);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

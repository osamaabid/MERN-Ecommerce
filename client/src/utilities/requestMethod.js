import axios from "axios";
// import { APIURL } from "../data";

const BASE_URL = "http://localhost:5000/api/v1";

const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmI4YTgwZjUzNThiODdhNmI2YmQzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzg3NTAzNiwiZXhwIjoxNjQ0MTM0MjM2fQ.JKGV4oGY0nnopwjU1zngHvOzLyjMciDkuj7QJ_u6M0M";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${JWT}` },
});

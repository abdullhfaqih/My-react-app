import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, collback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      collback(true, res.data.token);
    })
    .catch((err) => {
      collback(false, err);
    });
};

export const getUserToken = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};

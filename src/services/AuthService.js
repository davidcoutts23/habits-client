import axios from "axios";
const API_URL = "http://127.0.0.1:3000/api/v1/";

export const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });
};

export const getCurrentUser = () => {
  return localStorage.getItem("user");
};

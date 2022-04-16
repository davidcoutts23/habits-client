import axios from "axios";
const API_URL = process.env.REACT_APP_HABITS_API_URL;

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

export const logout = () => {
  localStorage.removeItem("user");
}

export const respondToAuthenticationFailure = (errorResponseStatus) => {
  if(errorResponseStatus == 401){
    logout();
    window.location.reload();
  }
}
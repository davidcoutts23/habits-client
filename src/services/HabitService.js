import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = "http://127.0.0.1:3000/api/v1/";

export const getHabits = () => {
  return axios.get(API_URL + "habits", { headers: authHeader() });
};

export const createHabit = (habit) => {
  console.log("trace")
  return axios.post(API_URL + "habits", habit, { headers: authHeader() });
};

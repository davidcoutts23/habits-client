import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = "https://sheltered-wildwood-26062.herokuapp.com/api/v1/";
// const API_URL = "http://localhost:3000/api/v1/";


export const getHabits = () => {
  return axios.get(API_URL + "habits", { headers: authHeader() });
};

export const createHabit = (habit) => {
  return axios.post(API_URL + "habits", habit, { headers: authHeader() });
};
  
export const getHabitRatings = () => {
  return axios.get(API_URL + "habit_ratings");
};


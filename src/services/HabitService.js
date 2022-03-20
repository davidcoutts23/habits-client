import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = "https://shrouded-wildwood-58915.herokuapp.com/api/v1/";

export const getHabits = () => {
  return axios.get(API_URL + "habits", { headers: authHeader() });
};

export const createHabit = (habit) => {
  return axios.post(API_URL + "habits", habit, { headers: authHeader() });
};
  
export const getHabitRatings = () => {
  return axios.get(API_URL + "habit_ratings");
};


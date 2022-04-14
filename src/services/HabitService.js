import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = process.env.REACT_APP_HABITS_API_URL;

export const getHabits = () => {
  return axios.get(API_URL + "habits", { headers: authHeader() });
};

export const createHabit = (habit) => {
  const habitParamaters = {
    name: habit.name,
    habit_rating_id: habit.rating.id,
    days_of_week_active: habit.daysOfWeekActive,
    application_intentions_attributes: habit.applicationIntentions
  };
  return axios.post(API_URL + "habits", habitParamaters, { headers: authHeader() });
};

export const editHabit = (habit) => {
  const habitParamaters = {
    name: habit.name,
    habit_rating_id: habit.rating.id
  };
  return axios.put(API_URL + "habits/" + habit.id, habitParamaters, {
    headers: authHeader(),
  });
};

export const deleteHabit = (habit) => {
  return axios.delete(API_URL + "habits/" + habit.id, {
    headers: authHeader(),
  });
};

export const getHabitRatings = () => {
  return axios.get(API_URL + "habit_ratings");
};

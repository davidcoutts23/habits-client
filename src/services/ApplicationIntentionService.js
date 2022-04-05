import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = process.env.REACT_APP_HABITS_API_URL;

export const createApplicationIntention = ( habitId, applicationIntention) => {
  applicationIntention.habit_id = habitId;
  console.log(applicationIntention)
  return axios.post(API_URL + "application_intentions", applicationIntention, { headers: authHeader() });
};


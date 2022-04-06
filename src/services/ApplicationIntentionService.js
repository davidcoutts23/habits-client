import axios from "axios";
import authHeader from "./AuthHeader";
const API_URL = process.env.REACT_APP_HABITS_API_URL;

export const createApplicationIntention = (habitId, applicationIntention) => {
  applicationIntention.habit_id = habitId;
  return axios.post(API_URL + "application_intentions", applicationIntention, {
    headers: authHeader(),
  });
};

export const editApplicationIntention = (applicationIntentionId, applicationIntentionParamaters) => {
  return axios.put(
    API_URL + "application_intentions/" + applicationIntentionId,
    applicationIntentionParamaters,
    { headers: authHeader() }
  );
};

export const deleteApplicationIntention = (applicationIntentionId) => {
  return axios.delete(
    API_URL + "application_intentions/" + applicationIntentionId,
    { headers: authHeader() }
  );
};

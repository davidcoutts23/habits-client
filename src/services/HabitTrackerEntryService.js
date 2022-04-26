import axios from "axios";
import authHeader from "./AuthHeader";
import { respondToAuthenticationFailure } from "./AuthService";
const API_URL = process.env.REACT_APP_HABITS_API_URL;

export const getUnprocessedHabitTrackerEntries = () => {
  return axios
    .get(API_URL + "habit_tracker_entries?completion_status=unprocessed", { headers: authHeader() })
    .catch((error) => {
      respondToAuthenticationFailure(error.response.status);
    });
};

export const editHabitTrackerEntry = (habitTrackerEntryId, completionStatus) => {
  const habitTrackerEntryParamaters = {
    completion_status: completionStatus
  };
  return axios
    .put(API_URL + "habit_tracker_entries/" + habitTrackerEntryId, habitTrackerEntryParamaters, {
      headers: authHeader(),
    })
    .catch((error) => {
      respondToAuthenticationFailure(error.response.status);
    });
};
import axios from 'axios';
import authHeader from './auth-header';
const API_URL = "http://127.0.0.1:3000/api/v1/";

class UserService {
  getHabits() {
    return axios.get(API_URL + 'habits', { headers: authHeader() });
  }
  createHabit() {
    return axios.post(API_URL + 'habits', { headers: authHeader() });
  }
}
export default new HabitService();
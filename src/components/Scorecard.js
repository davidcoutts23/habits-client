import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AddHabit from "./habit/AddHabit";
import Habit from "./habit/Habit";
import axios from "axios";
import modifyHabitRatings from "../helpers/modifyHabitRatings";
import { getHabits, createHabit } from "../services/HabitService";

export default function ScorecardComponent() {
  const [habitList, setHabitList] = useState([]);
  const [habitRatings, setHabitRatings] = useState([]);

  const handleAddHabit = () => {
    axios.get("http://127.0.0.1:3000/api/v1/habits").then((res) => {
      setHabitList(res.data);
    });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/v1/habit_ratings").then((res) => {
      setHabitRatings(modifyHabitRatings(res.data));
    });

    getHabits().then((res) => {
      setHabitList(res.data);
    });
  }, []);

  return (
    <Container>
      <div>
        {habitList.map((habit) => (
          <Habit habit={habit} key={habit.id} />
        ))}
      </div>

      <AddHabit handleAddHabit={handleAddHabit} habitRatings={habitRatings} />
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AddHabit from "./habit/AddHabit";
import Habit from "./habit/Habit";
import { getHabits, getHabitRatings } from "../services/HabitService";

export default function ScorecardComponent() {
  const [habitList, setHabitList] = useState([]);
  const [habitRatings, setHabitRatings] = useState([]);

  const handleAddHabit = () => {
    getHabits().then((res) => {
      setHabitList(res.data);
    });
  };

  useEffect(() => {
    getHabitRatings().then((res) => {
      setHabitRatings(res.data);
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

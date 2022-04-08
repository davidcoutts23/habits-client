import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AddHabit from "./habit/AddHabit";
import Habit from "./habit/Habit";
import { getHabits } from "../services/HabitService";

export default function ScorecardComponent() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = () => {
    getHabits().then((res) => {
      setHabits(res.data);
    });
  };

  useEffect(() => {
    getHabits().then((res) => {
      setHabits(res.data);
    });
  }, []);

  return (
    <Container>
      <div>
        {habits.map((habit) => (
          <Habit habit={habit} key={habit.id} />
        ))}
      </div>

      <AddHabit handleAddHabit={handleAddHabit} />
    </Container>
  );
}

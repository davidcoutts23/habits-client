import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AddHabit from "./AddHabit";
import Habit from "./Habit";

export default function ScorecardComponent() {
  const [habitList, setHabitList] = useState([]);

  const handleAddHabit = (habit) => {
    setHabitList([...habitList, habit]);
  };

  //   useEffect(() => {
  //     console.log(habitList[0]);
  //   }, [habitList]);

  return (
    <Container>
      <div>
        {habitList.map((habit) => (
          <Habit habit={habit} key='yo' />
        ))}
      </div>
      <AddHabit handleAddHabit={handleAddHabit} />
    </Container>
  );
}

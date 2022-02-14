import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import AddHabit from "./AddHabit";

export default function ScorecardComponent() {
  const handleAddHabit = (habitName) => {
    console.log(habitName);
  };

  return (
    <Container>
      <div>Habit table goes here</div>
      <AddHabit handleAddHabit={handleAddHabit} />
    </Container>
  );
}

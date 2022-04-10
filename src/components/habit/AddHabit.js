// TODO: Add form validation. Right now adding an empty form breaks the app

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { createHabit } from "../../services/HabitService";
import HabitForm from "./HabitForm";

export default function AddHabit() {
  const [addHabit, setAddHabit] = useState(false);

  const handleAddHabit = (habit) => {
    createHabit(habit)
      .then(function (response) {
        setAddHabit(false);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (addHabit) {
    return (
      <HabitForm handleSubmit={handleAddHabit} editMode={false} />
    );
  }
  return (
    <div>
      <Button className="mt-2" variant="info" onClick={() => setAddHabit(true)}>
        Add habit
      </Button>
    </div>
  );
}
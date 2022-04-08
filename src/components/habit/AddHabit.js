// TODO: Add form validation. Right now adding an empty form breaks the app

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { createHabit } from "../../services/HabitService";
import HabitForm from "./HabitForm";

export default function AddHabit({ habitRatings }) {
  const [addHabit, setAddHabit] = useState(false);

  const handleAddHabit = (habit) => {
    console.log(habit);
    createHabit({
      name: habit.habitName,
      habit_rating_id: habit.habitRating.id,
      application_intentions_attributes: habit.applicationIntentions,
    })
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
      <HabitForm handleSubmit={handleAddHabit} habitRatings={habitRatings} />
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
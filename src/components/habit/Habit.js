import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";
import { createApplicationIntention } from "../../services/ApplicationIntentionService";
import HabitForm from "./HabitForm";
import { editHabit, deleteHabit } from "../../services/HabitService";
import DaysOfWeekActive from "./DaysOfWeekActive";

export default function Habit({ habit }) {
  const [editHabitPressed, setEditHabitPressed] = useState(false);

  const handleEditHabit = (habit) => {
    editHabit(habit)
      .then(window.location.reload())
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDeleteHabit = () => {
    deleteHabit(habit)
      .then(window.location.reload())
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddApplicationIntention = (applicationIntention) => {
    createApplicationIntention(habit.id, applicationIntention)
      .then(window.location.reload())
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Card
      className="mt-2"
      style={{ width: "100%" }}
      border={habit.habit_rating.colour}
    >
      <Card.Body>
        <div className="mt-2">
          {editHabitPressed ? (
            <HabitForm
              handleSubmit={handleEditHabit}
              handleDelete={handleDeleteHabit}
              habit={habit}
              editMode={editHabitPressed}
            ></HabitForm>
          ) : (
            <div>
              <Card.Title>{habit.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {habit.habit_rating.rating}
              </Card.Subtitle>
              <DaysOfWeekActive daysOfWeekActive={habit.days_of_week_active} />
            </div>
          )}
        </div>
        {habit.application_intentions.map((applicationIntention) => {
          return (
            <ApplicationIntention
              applicationIntention={applicationIntention}
              key={applicationIntention.id}
              editHabit={editHabitPressed}
            />
          );
        })}
        <div className="mt-2">
          {editHabitPressed ? (
            <Button variant="danger" onClick={() => setEditHabitPressed(false)}>
              Cancel edit
            </Button>
          ) : (
            <div>
              <AddApplicationIntention
                handleAddApplicationIntention={handleAddApplicationIntention}
              />{" "}
              <Button variant="info" onClick={() => setEditHabitPressed(true)}>
                Edit habit
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

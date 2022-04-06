import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";
import { createApplicationIntention } from "../../services/ApplicationIntentionService";

export default function Habit({ habit }) {
  const [editHabit, setEditHabit] = useState(false);

  const handleAddApplicationIntention = (applicationIntention) => {
    createApplicationIntention(habit.id, applicationIntention).then(
      window.location.reload()
    );
  };

  return (
    <Card
      className="mt-2"
      style={{ width: "100%" }}
      border={habit.habit_rating.colour}
    >
      <Card.Body>
        <Card.Title>{habit.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {habit.habit_rating.rating}
        </Card.Subtitle>
        {habit.application_intentions.map((applicationIntention) => {
          return (
            <ApplicationIntention
              applicationIntention={applicationIntention}
              key={applicationIntention.id}
              editHabit={editHabit}
            />
          );
        })}
        <div className="mt-2">
          <AddApplicationIntention
            handleAddApplicationIntention={handleAddApplicationIntention}
          />{" "}
          {editHabit ? (
            <Button variant="danger" onClick={() => setEditHabit(false)}>
              Cancel
            </Button>
          ) : (
            <Button variant="info" onClick={() => setEditHabit(true)}>
              Edit habit
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

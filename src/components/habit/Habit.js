import React from "react";
import Card from "react-bootstrap/Card";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";

export default function Habit({ habit }) {
  const handleAddApplicationIntention = (applicationIntention) => {
    console.log(applicationIntention);
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
            />
          );
        })}
        <AddApplicationIntention
          handleAddApplicationIntention={handleAddApplicationIntention}
        />
      </Card.Body>
    </Card>
  );
}

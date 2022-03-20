import React from "react";
import Card from "react-bootstrap/Card";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";

export default function Habit({ habit }) {
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
            <ApplicationIntention applicationIntention={applicationIntention} key={habit.id}/>
          );
        })}
      </Card.Body>
    </Card>
  );
}

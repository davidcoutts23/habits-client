import React from "react";
import Card from "react-bootstrap/Card";

export default function HabitComponent({ habit }) {
  return (
    <Card
      className="mt-2"
      style={{ width: "100%" }}
      // border={habit.habitRating.colour}
    >
      <Card.Body>
        <Card.Title>{habit.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {habit.habit_rating.rating}
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";

export default function NoUnprocessedHabits() {
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Text>
          Rest easy, you're up to date with your habit tracking!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

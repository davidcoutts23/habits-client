import React from "react";
import Card from "react-bootstrap/Card";

export default function ApplicationIntention({ applicationIntention }) {
  return (
    <Card className="mt-2">
      <Card.Body>
        I will <strong>{applicationIntention.behaviour}</strong> at <strong>{applicationIntention.time}{" "}</strong>
        in <strong>{applicationIntention.location}</strong>
      </Card.Body>
    </Card>
  );
}

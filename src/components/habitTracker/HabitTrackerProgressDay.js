import React from "react";
import Col from "react-bootstrap/Col";

export default function HabitTrackerProgressDay({
  dayOfWeek,
  completionStatus,
}) {
  const dayColour = (completionStatus) => {
    if (completionStatus == "succeeded") {
      return { background: "linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%)" };
    }
    if (completionStatus == "failed") {
      return { background: "linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%" };
    }
    if (completionStatus == "undefined") {
      return { background: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)" };
    }
    if (completionStatus == "unprocessed") {
      return { background: "linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%)" };
    }
  };
  return (
    <Col
      style={dayColour(completionStatus)}
      className="shadow rounded text-center"
    >
      {<strong>{dayOfWeek}</strong>}
    </Col>
  );
}

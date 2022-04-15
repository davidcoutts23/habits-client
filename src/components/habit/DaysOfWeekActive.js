import React from "react";
import Card from "react-bootstrap/Card";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//TODO: Figure out why the day cannot be bold
export default function DaysOfWeekActive(daysOfWeekActive) {
  return (
    <Card className="mt-2">
      <Card.Body>
        I will perform this habit on{" "}
        {daysOfWeekActive.daysOfWeekActive.map((day, index) => {
          return daysOfWeekActive.daysOfWeekActive.length - 1 == index
            ? "and " + capitalizeFirstLetter(day) + "."
            : capitalizeFirstLetter(day) + ", ";
        })}
      </Card.Body>
    </Card>
  );
}

import React from "react";
import Card from "react-bootstrap/Card";
import {
  capitalizeFirstLetter,
} from "../../helpers/DaysOfWeekActive";

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

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { getHabitTrackerWeeklyProgress } from "../../services/HabitTrackerEntryService";
import HabitTrackerProgressDay from "./HabitTrackerProgressDay";

export default function HabitTrackerHistory(habit) {
  const [habitTrackerCurrentWeekProgress, setHabitTrackerCurrentWeekProgress] =
    useState([]);

  useEffect(() => {
    getHabitTrackerWeeklyProgress(habit.habit.id).then((res) => {
      setHabitTrackerCurrentWeekProgress(res.data);
    });
  }, []);

  return (
    <Card
      className="shadow mt-2"
      style={{ width: "100%" }}
      border={habit.habit.habit_rating.colour}
    >
      <Card.Body>
        <Card.Title>{habit.habit.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {habit.habit.habit_rating.rating}
        </Card.Subtitle>
        <div className="d-flex" style={{ gap: "10px" }}>
          {habitTrackerCurrentWeekProgress.map((day, index) => {
            console.log(day);
            return (
              <HabitTrackerProgressDay
                dayOfWeek={day.day_of_week}
                completionStatus={day.completion_status}
                key={index}
              />
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}

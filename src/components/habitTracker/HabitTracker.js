import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Habit from "../habit/Habit";
import NoUnprocessedHabitTrackerEntries from "./NoUnprocessedHabitTrackerEntries";
import { getHabits } from "../../services/HabitService";
import { getUnprocessedHabitTrackerEntries } from "../../services/HabitTrackerEntryService";

export default function TrackerComponent() {
  const [habits, setHabits] = useState([]);
  const [unprocessedHabitTrackerEntries, setUnprocessedHabitTrackerEntries] =
    useState([]);
  const [
    unprocessedHabitTrackerEntryIndex,
    setUnprocessedHabitTrackerEntryIndex,
  ] = useState(0);
  const [habitTrackerEntriesToProcess, setHabitTrackerEntriesToProcess] =
    useState(false);
  const [processedHabitTrackerEntries, setProcessedHabitTrackerEntries] =
    useState([]);

  useEffect(() => {
    getHabits().then((res) => {
      setHabits(res.data);
    });
    getUnprocessedHabitTrackerEntries().then((res) => {
      setUnprocessedHabitTrackerEntries(res.data);
      setHabitTrackerEntriesToProcess(true);
    });
  }, []);

  const handleHabitTrackerEntryCompletion = (status) => {
    setProcessedHabitTrackerEntries([
      ...processedHabitTrackerEntries,
      {
        habitTrackerEntryId:
          unprocessedHabitTrackerEntries[unprocessedHabitTrackerEntryIndex].id,
        completionStatus: status,
      },
    ]);
  };

  useEffect(() => {
    if (processedHabitTrackerEntries.length > 0) {
      if (
        unprocessedHabitTrackerEntries.length ==
        processedHabitTrackerEntries.length
      ) {
        setHabitTrackerEntriesToProcess(false);
      } else {
        setUnprocessedHabitTrackerEntryIndex(
          unprocessedHabitTrackerEntryIndex + 1
        );
      }
    }
  }, [processedHabitTrackerEntries]);

  return (
    <Container>
      {habits.length && habitTrackerEntriesToProcess ? (
        <div>
          <Habit habit={habits[unprocessedHabitTrackerEntryIndex]} />
          <Card className="mt-2" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Did you complete this habit today?</Card.Title>
              <Button
                variant="success"
                onClick={() => {
                  handleHabitTrackerEntryCompletion("succeeded");
                }}
              >
                {" "}
                Yes{" "}
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => {
                  handleHabitTrackerEntryCompletion("failed");
                }}
              >
                {" "}
                No{" "}
              </Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <NoUnprocessedHabitTrackerEntries />
      )}
    </Container>
  );
}

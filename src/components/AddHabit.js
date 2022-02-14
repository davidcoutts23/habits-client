import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AddHabitComponent({ handleAddHabit }) {
  const [addHabit, setAddHabit] = useState(false);
  const [habitName, setHabitName] = useState("");

  if (addHabit) {
    return (
      <Form
        onSubmit={(e) => {
          handleAddHabit(habitName);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Habit name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter habit name"
            value={habitName}
            onChange={(e) => {
              setHabitName(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  return (
    <div>
      <Button variant="info" onClick={() => setAddHabit(true)}>
        Add habit
      </Button>
    </div>
  );
}

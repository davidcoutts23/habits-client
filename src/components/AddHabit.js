import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function AddHabitComponent({ handleAddHabit }) {
  const [addHabit, setAddHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitRating, setHabitRating] = useState("");

  if (addHabit) {
    return (
      <Form
        onSubmit={(e) => {
          setAddHabit(false);
          setHabitName("");
          handleAddHabit({
              habitName: habitName,
              habitRating: habitRating,
          });
          console.log(habitName)
          console.log(habitRating)
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
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            onSelect={(e) => {
              setHabitRating(e);
            }}
          >
            <Dropdown.Item eventKey="Negative">Negative</Dropdown.Item>
            <Dropdown.Item eventKey="Neutral">Neutral</Dropdown.Item>
            <Dropdown.Item eventKey="Positive">Positive</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  return (
    <div>
      <Button className="mt-2" variant="info" onClick={() => setAddHabit(true)}>
        Add habit
      </Button>
    </div>
  );
}

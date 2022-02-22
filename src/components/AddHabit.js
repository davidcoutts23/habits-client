import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import AddApplicationIntention from "./AddApplicationIntention";

export default function AddHabitComponent({ handleAddHabit }) {
  const [addHabit, setAddHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitRating, setHabitRating] = useState("Select Rating");

  const handleAddApplicationIntention = (applicationIntention) => {
    console.log(applicationIntention)
  }
  
  if (addHabit) {
    return (
      <Card className="mt-2">
        <Card.Header>Add new habit</Card.Header>
        <div className="card-body">
        <Form
          onSubmit={(e) => {
            setAddHabit(false);
            setHabitName("");
            setHabitRating("Select Rating");
            handleAddHabit({
              habitName: habitName,
              habitRating: habitRating,
            });
            console.log(habitName);
            console.log(habitRating);
          }}
        >
          <Form.Group className="mt-2">
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="Enter habit name"
              value={habitName}
              onChange={(e) => {
                setHabitName(e.target.value);
              }}
            />
            <DropdownButton
              id="dropdown-basic-button"
              className="mt-2"
              title={habitRating}
              onSelect={(e) => {
                setHabitRating(e);
              }}
            >
              <Dropdown.Item eventKey="Negative">Negative</Dropdown.Item>
              <Dropdown.Item eventKey="Neutral">Neutral</Dropdown.Item>
              <Dropdown.Item eventKey="Positive">Positive</Dropdown.Item>
            </DropdownButton>
            <AddApplicationIntention handleAddApplicationIntention = {handleAddApplicationIntention}/>
          </Form.Group>
          <Button variant="success" type="submit" className="mt-2 mb-2">
            Submit
          </Button>
        </Form>
        </div>
      </Card>
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

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import { createHabit } from "../../services/HabitService";

export default function AddHabitComponent({ handleAddHabit, habitRatings }) {
  const [addHabit, setAddHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitRating, setHabitRating] = useState(null);
  const [applicationIntentions, setApplicationIntentions] = useState([]);

  const handleAddApplicationIntention = (applicationIntention) => {
    console.log(applicationIntention);
    setApplicationIntentions((applicationIntentions) => [
      ...applicationIntentions,
      applicationIntention,
    ]);
  };

  if (addHabit) {
    return (
      <Card className="mt-2">
        <Card.Header>Add new habit</Card.Header>
        <div className="card-body">
          <Form
            onSubmit={(e) => {
              createHabit({
                name: habitName,
                user_id: 1,
                habit_rating_id: habitRating.id,
                application_intentions_attributes: applicationIntentions,
              })
                .then(function (response) {
                  setAddHabit(false);
                  setHabitName("");
                  setHabitRating(0);
                  setApplicationIntentions([]);
                  handleAddHabit();
                })
                .catch(function (error) {
                  console.log(error);
                });
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
                title={habitRating ? habitRating.rating : "Select Rating"}
                onSelect={(habitRatingsIndex) => {
                  setHabitRating(habitRatings[habitRatingsIndex]);
                }}
              >
                {habitRatings.map((habitRating, habitRatingsIndex) => {
                  return (
                    <Dropdown.Item eventKey={habitRatingsIndex}>
                      {habitRating.rating}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              {applicationIntentions.map((applicationIntention, index) => {
                return (
                  <ApplicationIntention
                    applicationIntention={applicationIntention}
                    key={index}
                  />
                );
              })}
              <AddApplicationIntention
                handleAddApplicationIntention={handleAddApplicationIntention}
              />
            </Form.Group>
            <ButtonGroup className="mt-2 mb-2">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={() => setAddHabit(false)}>
                Cancel
              </Button>
            </ButtonGroup>
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

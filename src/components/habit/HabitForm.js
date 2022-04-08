import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import { getHabitRatings } from "../../services/HabitService";

export default function HabitForm({ handleSubmit }) {
  const [habitName, setHabitName] = useState("");
  const [habitRating, setHabitRating] = useState(null);
  const [applicationIntentions, setApplicationIntentions] = useState([]);
  const [habitRatings, setHabitRatings] = useState([]);

  useEffect(() => {
    getHabitRatings().then((res) => {
      setHabitRatings(res.data);
    });
  });

  const handleAddApplicationIntention = (applicationIntention) => {
    setApplicationIntentions((applicationIntentions) => [
      ...applicationIntentions,
      applicationIntention,
    ]);
  };

  return (
    <Card className="mt-2">
      <Card.Header>Add new habit</Card.Header>
      <div className="card-body">
        <Form>
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
              variant="info"
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
          </Form.Group>
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
          />{" "}
          <ButtonGroup className="mt-2 mb-2">
            <Button
              variant="success"
              onClick={() =>
                handleSubmit({ habitName, habitRating, applicationIntentions })
              }
            >
              Submit
            </Button>
          </ButtonGroup>
        </Form>
      </div>
    </Card>
  );
}
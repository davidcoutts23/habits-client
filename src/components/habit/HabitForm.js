import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import AddApplicationIntention from "../applicationIntention/AddApplicationIntention";
import ApplicationIntention from "../applicationIntention/ApplicationIntention";
import { getHabitRatings } from "../../services/HabitService";

export default function HabitForm({
  handleSubmit,
  handleDelete,
  habit,
  editMode,
}) {
  const [id, setId] = useState(editMode ? habit.id : "");
  const [name, setName] = useState(editMode ? habit.name : "");
  const [rating, setRating] = useState(editMode ? habit.habit_rating : null);
  const [applicationIntentions, setApplicationIntentions] = useState([]);
  const [habitRatings, setHabitRatings] = useState([]);

  useEffect(() => {
    getHabitRatings().then((res) => {
      setHabitRatings(res.data);
    });
  }, []);

  const handleAddApplicationIntention = (applicationIntention) => {
    setApplicationIntentions((applicationIntentions) => [
      ...applicationIntentions,
      applicationIntention,
    ]);
  };

  return (
    <Card className="mt-2">
      <Card.Header>
        {editMode ? (
          <strong>Edit Habit</strong>
        ) : (
          <strong>Add new habit</strong>
        )}{" "}
      </Card.Header>
      <div className="card-body">
        <Form>
          <Form.Group className="mt-2 mb-2">
            <Form.Control
              className="mt-2"
              type="text"
              placeholder="Enter habit name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <DropdownButton
              id="dropdown-basic-button"
              className="mt-2"
              variant="info"
              title={rating ? rating.rating : "Select Rating"}
              onSelect={(habitRatingsIndex) => {
                setRating(habitRatings[habitRatingsIndex]);
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
          <div className="mt-2 mb-2">
          {!editMode && (
            <AddApplicationIntention
              handleAddApplicationIntention={handleAddApplicationIntention}
            />
          )}{" "}
            <Button
              variant="success"
              onClick={() =>
                handleSubmit({ id, name, rating, applicationIntentions })
              }
            >
              {editMode ? "Update" : "Create"}
            </Button>{" "}
            {editMode && (
              <Button variant="danger" onClick={() => handleDelete()}>
                Delete
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Card>
  );
}

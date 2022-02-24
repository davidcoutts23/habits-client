import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function AddApplicationIntention({
  handleAddApplicationIntention,
}) {
  const [addApplicationIntention, setAddApplicationIntention] = useState(false);
  const [behavior, setBehaviour] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    setAddApplicationIntention(false);
    setBehaviour("");
    setTime("");
    setLocation("");
    handleAddApplicationIntention({
      behavior: behavior,
      time: time,
      location: location,
    });
  };

  if (addApplicationIntention) {
    return (
      <div>
        <Card className="mt-2">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                console.log("yoyobongo");
              }}
            >
              <Form.Label>I will...</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Enter desired behavior"
                value={behavior}
                onChange={(e) => {
                  setBehaviour(e.target.value);
                }}
              />
              <Form.Label>At...</Form.Label>
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="Enter time when you will perform this behaviour"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <Form.Label>In...</Form.Label>
              <Form.Control
                className="mb -2"
                type="text"
                placeholder="Enter location where you will perform this behaviour"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </Form>
            <Button
              variant="success"
              type="button"
              className="mt-2 mb-2"
              onClick={() => handleSubmit()}
            >
              Add application intention
            </Button>
          </div>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <Button
        className="mt-2"
        variant="info"
        onClick={() => setAddApplicationIntention(true)}
      >
        Add application intention
      </Button>
    </div>
  );
}

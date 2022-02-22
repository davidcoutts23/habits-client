import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function AddApplicationIntention() {
  const [addApplicationIntention, setAddApplicationIntention] = useState(false);
  const [behavior, setBehaviour] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

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
                value={time}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </Form>
            <Button variant="success" type="submit" className="mt-2 mb-2">
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

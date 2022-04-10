// TODO: Add form validation. Right now adding an empty form breaks the app

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";

export default function ApplicationIntentionForm({
  handleSubmit,
  handleDelete,
  applicationIntention,
}) {
  const [behaviour, setBehaviour] = useState(
    applicationIntention ? applicationIntention.behaviour : ""
  );
  const [time, setTime] = useState(
    applicationIntention ? applicationIntention.time : ""
  );
  const [location, setLocation] = useState(
    applicationIntention ? applicationIntention.location : ""
  );

  return (
    <div>
      <Card className="mt-2">
        <Card.Header>
          {applicationIntention ? (
            <strong>Edit application intention</strong>
          ) : (
            <strong>Add application intention</strong>
          )}{" "}
        </Card.Header>
        <div className="card-body">
          <Form>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">I will...</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter desired behaviour"
                value={behaviour}
                onChange={(e) => {
                  setBehaviour(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">When I...</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter time when you will perform this behaviour"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup className="mb-2">
              <InputGroup.Text id="basic-addon1">In the...</InputGroup.Text>
              <Form.Control
                type="te xt"
                placeholder="Enter the location where you will perform this behaviour"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </InputGroup>
          </Form>
          <div>
            <Button
              variant="success"
              type="button"
              className="mt-2 mb-2"
              onClick={() => {
                handleSubmit({
                  behaviour: behaviour,
                  time: time,
                  location: location,
                });
                setBehaviour("");
                setTime("");
                setLocation("");
              }}
            >
              Submit
            </Button>{" "}
            {applicationIntention && (
              <Button
                variant="danger"
                type="button"
                className="mt-2 mb-2"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

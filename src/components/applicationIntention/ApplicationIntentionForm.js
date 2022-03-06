import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";

export default function ApplicationIntentionForm({ handleSubmit }) {
  const [behaviour, setBehaviour] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <Card className="mt-2">
        <div className="card-body">
          <Form
          >
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
              <InputGroup.Text id="basic-addon1">At...</InputGroup.Text>
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
              <InputGroup.Text id="basic-addon1">In...</InputGroup.Text>
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
            Add application intention
          </Button>
        </div>
      </Card>
    </div>
  );
}

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApplicationIntentionForm from "./ApplicationIntentionForm";
import { editApplicationIntention } from "../../services/ApplicationIntentionService";

export default function ApplicationIntention({ applicationIntention }) {
  const [edit, setEdit] = useState(false);

  const handleEditApplicationIntention = (applicationIntention) => {
    console.log(applicationIntention);
    setEdit(false);
    editApplicationIntention(applicationIntention).then(
      window.location.reload()
    );
  };

  if (edit) {
    return (
      <ApplicationIntentionForm
        handleSubmit={handleEditApplicationIntention}
        applicationIntention={applicationIntention}
      />
    );
  }

  return (
    <Card className="mt-2">
      <Card.Body>
        I will <strong>{applicationIntention.behaviour}</strong> when I{" "}
        <strong>{applicationIntention.time} </strong>
        in the <strong>{applicationIntention.location}</strong>
        <div>
          <Button variant="info" onClick={() => setEdit(true)}>
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

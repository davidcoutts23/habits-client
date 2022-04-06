import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ApplicationIntentionForm from "./ApplicationIntentionForm";
import { editApplicationIntention } from "../../services/ApplicationIntentionService";
import { deleteApplicationIntention } from "../../services/ApplicationIntentionService";

export default function ApplicationIntention({
  applicationIntention,
  editHabit,
}) {
  const [edit, setEdit] = useState(false);

  const handleEditApplicationIntention = (applicationIntentionFormValues) => {
    setEdit(false);
    editApplicationIntention(
      applicationIntention.id,
      applicationIntentionFormValues
    ).then(window.location.reload());
  };

  const handleDeleteApplicationIntention = () => {
    deleteApplicationIntention(
      applicationIntention.id
    ).then(window.location.reload());
  };

  if (editHabit) {
    return (
      <ApplicationIntentionForm
        handleSubmit={handleEditApplicationIntention}
        handleDelete={handleDeleteApplicationIntention}
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
      </Card.Body>
    </Card>
  );
}

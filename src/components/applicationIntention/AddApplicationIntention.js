import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ApplicationIntentionForm from "./ApplicationIntentionForm";

export default function AddApplicationIntention({
  handleAddApplicationIntention,
}) {
  const [addApplicationIntention, setAddApplicationIntention] = useState(false);

  const handleSubmit = (applicationIntention) => {
    setAddApplicationIntention(false);
    handleAddApplicationIntention(applicationIntention);
  };

  if (addApplicationIntention) {
    return <ApplicationIntentionForm handleSubmit={handleSubmit} editMode={false} />;
  }
  return (
    <Button variant="info" onClick={() => setAddApplicationIntention(true)}>
      Add application intention
    </Button>
  );
}

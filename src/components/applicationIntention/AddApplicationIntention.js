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
    return <ApplicationIntentionForm handleSubmit={handleSubmit} />;
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

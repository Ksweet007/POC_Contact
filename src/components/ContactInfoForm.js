import React, { useState } from "react";
import Address from "./Address";

function ContactInfoForm({ person, onSave }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <>
      <form onSubmit={onSave}>
        <div style={{ margin: "15px", display: "inline-block" }}>
          <Address person={person} />
        </div>
      </form>
    </>
  );
}

export default ContactInfoForm;

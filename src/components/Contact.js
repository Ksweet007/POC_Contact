import React, { useState } from "react";
import Address from "./Address";
import Button from "@paycor/button";
import { Icons } from "@paycor/icon";
import * as personApi from "../api/personApi";
import { toast } from "react-toastify";
import Phone from "./Phone";

function Contact(props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function handleSave(savedUser) {
    debugger;
    toast.success("saved!");
  }

  function savePerson() {
    //Validate
    setIsFormSubmitted(true);
    personApi.editPerson(props.person).then(handleSave);
  }

  return (
    <>
      <div style={{ width: "900px" }}>
        <div style={{ margin: "15px", display: "inline-block" }}>
          <Address
            person={props.person}
            sessionFunction={props.sessionFunction}
          />
        </div>
        <div style={{ margin: "15px", display: "inline-block" }}>
          <Phone />
        </div>
        <div style={{ float: "right", margin: "20px" }}>
          <Button
            type={Button.Types.SAVE}
            icon={Icons.Checkmark}
            onClick={() => savePerson()}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;

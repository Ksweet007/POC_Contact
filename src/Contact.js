import React, { useState } from "react";
import { Select, InputField } from "@paycor/form-elements";
import Address from "./Address";
import Button from "@paycor/button";
import { Icons } from "@paycor/icon";

function Contact(props) {
  return (
    <>
      <div style={{ width: "900px" }}>
        <div>
          <Address
            person={props.person}
            sessionFunction={props.sessionFunction}
          />
        </div>
        <div style={{ float: "right", margin: "20px" }}>
          <Button
            type={Button.Types.SAVE}
            icon={Icons.Checkmark}
            onClick={() =>
              alert(
                `Save Clicked Person Name is ${props.person.contact.address.addressline1}`
              )
            }
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;

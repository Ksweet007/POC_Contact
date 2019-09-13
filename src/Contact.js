import React from "react";
import { Select, InputField } from "@paycor/form-elements";
import Address from "./Address";
import Button from "@paycor/button";
import { Icons } from "@paycor/icon";

function Contact() {
  const countries = [
    { id: "usa-id", label: "United States of America", value: "USA" },
    { id: "another-id", label: "some value", value: "some more value" }
  ];
  return (
    <>
      <div style={{ width: "900px" }}>
        <div>
          <Address />
        </div>
        <div style={{ float: "right", margin: "20px" }}>
          <Button
            type={Button.Types.SAVE}
            icon={Icons.Checkmark}
            onClick={() => alert("Save Clicked")}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;

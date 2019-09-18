import React from "react";
import TabGroup from "@paycor/tabs";
import Contact from "./Contact";

function PersonalInformation(props) {
  return (
    <>
      <h1>Personal Information</h1>
      <TabGroup>
        <TabGroup.Tab id={"identity"} title={"Identity"} key={1}>
          <p>Here is the Identity Tab!</p>
        </TabGroup.Tab>
        <TabGroup.Tab id={"contact"} title={"Contact"} key={2} active={true}>
          <Contact personId={props.match.params.personId} />
        </TabGroup.Tab>
        <TabGroup.Tab
          id={"emergencyContact"}
          title={"Emergency Contact"}
          key={3}
        >
          <p>Here is the Emergency Contact Tab!</p>
        </TabGroup.Tab>
      </TabGroup>
    </>
  );
}

export default PersonalInformation;

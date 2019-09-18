import React, { useState, useEffect } from "react";
import TabGroup from "@paycor/tabs";
import Contact from "./Contact";
import { defaultPersonModel } from "./models/PersonModel";
import * as personApi from "./api/personApi";

function PersonalInformation(props) {
  const [person, setPerson] = useState(defaultPersonModel);

  useEffect(() => {
    let isMounted = true;
    if (props.match.params.personId) {
      personApi.getPersonById(props.match.params.personId).then(person => {
        if (isMounted) {
          setPerson(person);
        }
      });
    }

    return () => (isMounted = false);
  }, [props.match.params.personId]);

  return (
    <>
      <h1>Personal Information</h1>
      <TabGroup>
        <TabGroup.Tab id={"identity"} title={"Identity"} key={1}>
          <p>Here is the Identity Tab!</p>
        </TabGroup.Tab>
        <TabGroup.Tab id={"contact"} title={"Contact"} key={2} active={true}>
          <Contact person={person} />
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

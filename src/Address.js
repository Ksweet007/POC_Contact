import React, { useState, useEffect } from "react";
import { Select, InputField } from "@paycor/form-elements";
import { getQueryStringParameters } from "./utils";
import * as personApi from "./api/personApi";

const countries = [
  { id: "usa-id", label: "United States of America", value: "USA" },
  { id: "another-id", label: "some value", value: "some more value" }
];
const states = [
  { id: "oh-id", label: "Ohio", value: "OH" },
  { id: "ky-id", label: "Kentucky", value: "KY" }
];

const personModel = {
  id: 1,
  identity: {},
  contact: {
    address: {
      country: "",
      addressline1: "",
      suite: "",
      addressline2: "",
      city: "",
      state: "",
      zipcode: "",
      county: ""
    },
    phone: {},
    email: {},
    websocial: {}
  },
  emergencycontacts: {}
};

function Address(props) {
  const [person, setPerson] = useState(personModel);
  useEffect(() => {
    let isMounted = true;
    if (props.personId) {
      personApi.getPersonById(props.personId).then(person => {
        if (isMounted) {
          setPerson(person);
        }
      });
    }

    return () => (isMounted = false);
  }, [props.personId]);

  return (
    <>
      <h2>Address</h2>
      <form>
        <div
          id={"countryDiv"}
          style={{
            width: "350px",
            margin: "5px"
          }}
        >
          <Select
            placeholder={"Value"}
            handleChange={selection => console.log("selected:", selection)}
            handleClick={clicked => console.log(clicked)}
            label={"Country*"}
            options={countries}
          />
        </div>
        <div
          id={"addressDiv"}
          style={{
            display: "inline",
            float: "left",
            margin: "5px",
            width: "350px"
          }}
        >
          <InputField
            onChange={value => console.log(value)}
            label={"Address Line 1*"}
            value={person.contact.address.addressline1}
          />
        </div>
        <div
          style={{
            display: "inline",
            float: "left",
            margin: "5px",
            width: "148px"
          }}
        >
          <InputField
            onChange={value => console.log(value)}
            label={"Suite"}
            value={person.contact.address.suite}
          />
        </div>
        <div style={{ margin: "5px", width: "508px" }}>
          <InputField
            onChange={value => console.log(value)}
            label={"Address Line 2"}
            value={person.contact.address.addressline2}
          />
        </div>
        <div
          id={"cityDiv"}
          style={{
            width: "350px",
            margin: "5px",
            float: "left"
          }}
        >
          <InputField
            onChange={value => console.log(value)}
            label={"City*"}
            value={person.contact.address.city}
          />
        </div>
        <div
          style={{
            width: "140px",
            margin: "5px",
            float: "left"
          }}
        >
          <Select
            placeholder={"Value"}
            handleChange={selection => console.log("selected:", selection)}
            handleClick={clicked => console.log(clicked)}
            label={"State*"}
            options={states}
          />
        </div>
        <div
          id={"zipDiv"}
          style={{
            width: "140px",
            margin: "5px",
            float: "left"
          }}
        >
          <InputField
            onChange={value => console.log(value)}
            label={"Zip Code*"}
            value={person.contact.address.zipcode}
          />
        </div>
        <div
          style={{
            width: "200px",
            margin: "5px",
            float: "left"
          }}
        >
          <InputField
            onChange={value => console.log(value)}
            label={"County"}
            value={person.contact.address.county}
          />
        </div>
      </form>
    </>
  );
}

export default Address;

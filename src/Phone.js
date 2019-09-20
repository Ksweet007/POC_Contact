import React, { useState } from "react";
import InputWithSelector from "./reusable/InputWithSelector";

const phoneTypes = [
  { id: "home-id", label: "Home", value: "home" },
  { id: "hq-id", label: "HQ", value: "hq" }
];

function Phone(props) {
  return (
    <>
      <h2>Phone</h2>
      <InputWithSelector options={phoneTypes} />
    </>
  );
}

export default Phone;

import React from "react";
import { Select, InputField } from "@paycor/form-elements";

function InputWithSelector(props) {
  return (
    <div>
      <div
        style={{
          display: "inline",
          float: "left",
          width: "160px"
        }}
      >
        <Select
          placeholder={"Value"}
          handleChange={selection => console.log("selected:", selection)}
          handleClick={clicked => console.log(clicked)}
          options={props.options}
        />
      </div>
      <div
        style={{
          display: "inline",
          float: "left",
          width: "150px"
        }}
      >
        <InputField />
      </div>
    </div>
  );
}
export default InputWithSelector;

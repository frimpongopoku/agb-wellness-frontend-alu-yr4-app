import React from "react";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import TextField from "../../components/texfield/TextField";

function Registration() {
  return (
    <div>
      <TextField
        label="Email addresss"
        type="email"
        placeholder="Enter email address..."
      />
      <TextField
        label="Your name"
        type="text"
        placeholder="What would you like to be called?"
      />
      <TextField
        label="Date of birth"
        type="date"
        placeholder="Enter your date of birth..."
      />
      <TextField
        label="Your Password"
        type="password"
        placeholder="Enter your password..."
      />
      <TextField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password..."
      />
      <div>
        <Checkbox label="Are you a manager?" labelStyle={{ fontSize: 17 }} />
      </div>

      <TextField
        label="Staff Code"
        type="text"
        placeholder="Enter your given staff code..."
      />

      <br />
      <div>
        <Button>Complete Registration</Button>
      </div>
    </div>
  );
}

export default Registration;

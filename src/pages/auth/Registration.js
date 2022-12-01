import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";

function Registration() {
  const [isManager, setIsManager] = useState(false);
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
        <Checkbox
          onChange={() => setIsManager(!isManager)}
          label="Are you a manager?"
          labelStyle={{ fontSize: 17 }}
          checked={isManager}
        />
      </div>

      <TextField
        label={`${isManager ? "Manager" : "Staff"} Code`}
        type="text"
        placeholder={`Enter your given ${
          isManager ? "manager" : "staff"
        } code...`}
      />

      {/* <Dropdown
        label="Choose something now..."
        data={[1, 2, 3, 4]}
        onChange={(value) => console.log("here is the value", value)}
      /> */}

      <br />
      <div>
        <Button>Complete Registration</Button>
      </div>
    </div>
  );
}

export default Registration;

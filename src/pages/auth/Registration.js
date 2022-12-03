import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";
import { isValidEmail } from "../../shared/utils";

function Registration({ showNotification }) {
  const [isManager, setIsManager] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };
  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const sendToBackend = () => {
    const { email, password, confirmPassword, code, name, dob } = form;
    if (!email || !isValidEmail(email)) return setError("Enter a valid email");
    if (!name) return setError("You need to provide a name...");
    if (!dob) return setError("Please provide a date of birth");
    if (!password) return setError("Enter a valid password");
    if (password !== confirmPassword)
      return setError("Please make sure your passwords match");
    if (!code)
      setError("Please provide your given code to proceed with registration");
    showNotification({});
    setLoading(true);
    // ---------------------------------------------------------
  };
  return (
    <div>
      <TextField
        onChange={(email) => onChange("email", email)}
        label="Email addresss"
        type="email"
        placeholder="Enter email address..."
      />
      <TextField
        onChange={(name) => onChange("name", name)}
        label="Your name"
        type="text"
        placeholder="What would you like to be called?"
      />
      <TextField
        onChange={(dob) => onChange("dob", dob)}
        label="Date of birth"
        type="date"
        generic={{ max: new Date() }}
        placeholder="Enter your date of birth..."
      />
      <TextField
        onChange={(pass) => onChange("password", pass)}
        label="Your Password"
        type="password"
        placeholder="Enter your password..."
      />
      <TextField
        onChange={(pass) => onChange("confirmPassword", pass)}
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
        onChange={(code) => onChange("code", code)}
        label={`${isManager ? "Manager" : "Staff"} Code`}
        type="text"
        placeholder={`Enter your given ${
          isManager ? "manager" : "staff"
        } code...`}
      />

      <br />
      <div>
        <Button loading={loading} onClick={() => sendToBackend()}>
          Complete Registration
        </Button>
      </div>
    </div>
  );
}

export default Registration;

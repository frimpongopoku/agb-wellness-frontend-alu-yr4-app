import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Checkbox from "../../components/checkbox/Checkbox";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import {
  API_MANAGER_REGISTRATION,
  API_STAFF_REGISTRATION,
} from "../../shared/api/urls";
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
    const { email, password, confirmPassword, code, firstName, lastName, dob } =
      form;
    if (!email || !isValidEmail(email)) return setError("Enter a valid email");
    if (!firstName || !lastName)
      return setError("You need to provide a name...");
    if (!dob) return setError("Please provide a date of birth");
    if (!password) return setError("Enter a valid password");
    if (password !== confirmPassword)
      return setError("Please make sure your passwords match");
    if (!code)
      setError("Please provide your given code to proceed with registration");
    showNotification({});
    setLoading(true);

    const url = isManager ? API_MANAGER_REGISTRATION : API_STAFF_REGISTRATION;
    // ---------------------------------------------------------

    InternetExplorer.post({ url, body: form }).then((response) => {
      setLoading(false);
      console.log("Here is the registration resposne", response);
      if (!response.success) return setError(response.error);
      window.location.reload();
    });
  };
  return (
    <div>
      <TextField
        onChange={(email) => onChange("email", email)}
        label="Email addresss"
        type="email"
        placeholder="Enter email address..."
        value={form.email || ""}
      />
      <TextField
        onChange={(name) => onChange("firstName", name)}
        label="Your First Name"
        type="text"
        placeholder="What would you like to be called?"
        value={form.firstName || ""}
      />
      <TextField
        onChange={(name) => onChange("lastName", name)}
        label="Your Last Name"
        type="text"
        placeholder="Whats your last name?"
        value={form.lastName || ""}
      />
      <TextField
        onChange={(dob) => onChange("dob", dob)}
        label="Date of birth"
        type="date"
        generic={{ max: new Date() }}
        placeholder="Enter your date of birth..."
        value={form.dob || ""}
      />
      <TextField
        onChange={(pass) => onChange("password", pass)}
        label="Your Password"
        type="password"
        placeholder="Enter your password..."
        value={form.password || ""}
      />
      <TextField
        onChange={(pass) => onChange("confirmPassword", pass)}
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password..."
        value={form.confirmPassword || ""}
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
        value={form.code || ""}
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

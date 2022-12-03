import React, { useState } from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { isValidEmail } from "../../shared/utils";

function AddStaff({ toggleSidePane, showNotification }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };
  const sendToBackend = () => {
    showNotification({});
    if (!name)
      return setError("Please enter the name of staff you want to add...");
    if (!email || !isValidEmail(email))
      return setError(
        "Please enter a valid email of the staff you want to add..."
      );
  };
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>ADD NEW STAFF</h1>
      <br />
      <TextField
        onChange={(text) => setName(text)}
        label="Name"
        placeholder="Name  of staff member..."
        value={name}
      />
      <TextField
        onChange={(text) => setEmail(text)}
        label="Email"
        placeholder="Email  of staff member..."
        value={email}
      />

      <br />
      <Button onClick={() => sendToBackend()}>ADD STAFF</Button>
      <Button
        onClick={() =>
          toggleSidePane && toggleSidePane({ show: false, component: null })
        }
        style={{ background: "var(--app-red)", marginTop: 10 }}
      >
        CLOSE
      </Button>
    </div>
  );
}

export default AddStaff;

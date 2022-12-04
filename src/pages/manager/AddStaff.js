import React, { useState } from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_ADD_STAFF } from "../../shared/api/urls";
import { isValidEmail } from "../../shared/utils";

function AddStaff({
  toggleSidePane,
  showNotification,
  putStaffInRedux,
  staffs,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };
  const sendToBackend = () => {
    showNotification({});
    const image = "https://i.pravatar.cc/200?u=" + Math.random().toString();
    if (!name)
      return setError("Please enter the name of staff you want to add...");
    if (!email || !isValidEmail(email))
      return setError(
        "Please enter a valid email of the staff you want to add..."
      );

    setLoading(true);
    InternetExplorer.post({
      url: API_ADD_STAFF,
      body: { email, firstName: name, image },
    }).then((response) => {
      setLoading(false);
      console.log("Here is the response", response);
      if (!response.success) return setError(response.error);
      putStaffInRedux(response.data);
      setName("");
      setEmail("");
    });
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
      <Button onClick={() => sendToBackend()} loading={loading}>
        ADD STAFF
      </Button>
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

import React from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";


function AddStaff({ toggleSidePane }) {
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>ADD NEW STAFF</h1>
      <br />
      <TextField label="Name" placeholder="Name  of staff member..." />
      <TextField label="Email" placeholder="Email  of staff member..." />

      <br />
      <Button>ADD STAFF</Button>
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

import React from "react";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";

function CreateOrEditGoal({ toggleSidePane, id }) {
  const inEditMode = id;
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>
        {inEditMode ? "EDIT GOAL" : "NEW GOAL"}
      </h1>
      <br />
      <TextField label="Title" placeholder="Title of goal..." />
      <TextField
        type="date"
        label="Date of completion"
        placeholder="Goal should be complete by..."
      />
      <Dropdown label="Select Category" />
      <br />
      <Button style={{ background: "var(--app-yellow)", color: "black" }}>
        FINISH
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

export default CreateOrEditGoal;

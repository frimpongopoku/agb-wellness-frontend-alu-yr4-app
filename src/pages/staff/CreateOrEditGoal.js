import React, { useState } from "react";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";

function CreateOrEditGoal({ toggleSidePane, id, showNotification }) {
  const [form, setForm] = useState({});
  const inEditMode = id;

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };

  const sendToBackend = () => {
    const { title, dueBy, description, category } = form;

    if (!title || !description || !category)
      return setError(
        "Please provide values for title, description, and category..."
      );
    if (!dueBy)
      return setError(
        "Select the date that you would like to complete this..."
      );

    console.log("htis it he form", form);
  };
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>
        {inEditMode ? "EDIT GOAL" : "NEW GOAL"}
      </h1>
      <br />
      <TextField
        onChange={(text) => onChange("title", text)}
        label="Title"
        placeholder="Title of goal..."
        value={form.title}
      />
      <TextField
        onChange={(text) => onChange("description", text)}
        label="Description"
        placeholder="Brief description of goal..."
        value={form.description}
        textarea
      />
      <TextField
        onChange={(text) => onChange("dueBy", text)}
        type="date"
        label="Date of completion"
        placeholder="Goal should be complete by..."
        value={form.dueBy}
      />
      <Dropdown
        onChange={(value) => onChange("category", value)}
        label="Select Category"
        value={form.category}
      />
      <br />
      <Button
        onClick={() => sendToBackend()}
        style={{ background: "var(--app-yellow)", color: "black" }}
      >
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

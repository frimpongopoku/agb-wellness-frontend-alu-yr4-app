import React, { useState } from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";

function AddOrEditCategory({ toggleSidePane, id, showNotification }) {
  const inEditMode = id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };

  const sendToBackend = () => {
    showNotification({});
    if (!name) return setError("Please enter a valid name for the category...");
    if (!description)
      return setError(
        "Please provide a brief description of what the category is about..."
      );
  };

  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>
        {inEditMode ? "EDIT CATEGORY" : "ADD NEW CATEGORY"}
      </h1>
      <br />
      <TextField
        onChange={(text) => setName(text)}
        label="Name (40 Chars)"
        placeholder="Name  of new category..."
        value={name}
        generic={{ maxLength: 40 }}
      />
      <TextField
        textarea
        onChange={(text) => setDescription(text)}
        label="Description (100 Chars)"
        placeholder="Brief description of category..."
        value={description}
        generic={{ maxLength: 100 }}
      />

      <br />
      <Button onClick={() => sendToBackend()}>ADD CATEGORY</Button>
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

export default AddOrEditCategory;

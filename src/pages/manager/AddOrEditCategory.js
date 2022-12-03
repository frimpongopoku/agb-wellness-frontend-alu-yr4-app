import React from "react";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";

function AddOrEditCategory({ toggleSidePane, id }) {
  const inEditMode = id;
  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>
        {inEditMode ? "EDIT CATEGORY" : "ADD NEW CATEGORY"}
      </h1>
      <br />
      <TextField label="Name" placeholder="Name  of new category..." />
      <TextField
        label="Description"
        placeholder="Brief description of category..."
      />

      <br />
      <Button>ADD CATEGORY</Button>
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

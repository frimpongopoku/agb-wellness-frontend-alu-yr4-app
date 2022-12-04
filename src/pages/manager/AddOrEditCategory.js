import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_CREATE_CATEGORY } from "../../shared/api/urls";

function AddOrEditCategory({
  toggleSidePane,
  id,
  showNotification,
  putCategoryInRedux,
  categories,
}) {
  const inEditMode = id;


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    InternetExplorer.post({
      url: API_CREATE_CATEGORY,
      body: { name, description },
    }).then((response) => {
      setLoading(false);
      console.log("Add to category respnose", response);
      if (!response.success) setError(response.error);
      putCategoryInRedux([response.data, ...categories]);
      setName("");
      setDescription("");
    });
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
      <Button onClick={() => sendToBackend()} loading={loading}>
        ADD CATEGORY
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

const mapStateToProps = (state) => {
  return { categories: state.categories };
};
export default connect(mapStateToProps)(AddOrEditCategory);

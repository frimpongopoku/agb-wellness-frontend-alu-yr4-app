import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "../../components/button/Button";
import TextField from "../../components/texfield/TextField";
import { reduxSetCategories } from "../../redux/actions/actions";
import { LOADING } from "../../redux/reducers/reducers";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import {
  API_CREATE_CATEGORY,
  API_UPDATE_CATEGORY,
} from "../../shared/api/urls";

function AddOrEditCategory({
  toggleSidePane,
  id,
  showNotification,
  putCategoryInRedux,
  categories,
}) {
  categories = categories === LOADING ? [] : categories;
  const inEditMode = id;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };

  useEffect(() => {
    if (!id) return;
    let found = categories.find((c) => c._id.toString() === id.toString());

    if (found) {
      setName(found.name);
      setDescription(found.description);
    }
  }, [id, categories]);

  const close = () => {
    toggleSidePane({ show: false, component: null });
  };
  const updateInBackend = ({ data, id, cb }) => {
    InternetExplorer.post({
      url: API_UPDATE_CATEGORY,
      body: { data, id },
    }).then((response) => {
      if (!response.success)
        return console.log("ERROR - Category - UPDATE: ", response.error);
      const rem = categories.filter((g) => g._id.toString() !== id.toString());
      putCategoryInRedux([response.data, ...rem]);
      cb && cb();
      close();
    });
  };

  const sendToBackend = () => {
    showNotification({});
    if (!name) return setError("Please enter a valid name for the category...");
    if (!description)
      return setError(
        "Please provide a brief description of what the category is about..."
      );

    setLoading(true);
    if (inEditMode)
      return updateInBackend({
        id,
        data: { name, description },
        cb: () => {
          setLoading(false);
        },
      });

    // ----------------------------------------
    InternetExplorer.post({
      url: API_CREATE_CATEGORY,
      body: { name, description },
    }).then((response) => {
      setLoading(false);
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
        label="Name (30 Chars)"
        placeholder="Name  of new category..."
        value={name}
        generic={{ maxLength: 30 }}
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
        {inEditMode ? "SAVE CHANGES" : "ADD CATEGORY"}
      </Button>
      <Button
        onClick={() => close()}
        style={{ background: "var(--app-red)", marginTop: 10 }}
      >
        CLOSE
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      putCategoryInRedux: reduxSetCategories,
    },
    dispatch
  );
};
const mapStateToProps = (state) => {
  return { categories: state.categories };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCategory);

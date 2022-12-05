import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import TextField from "../../components/texfield/TextField";
import { LOADING } from "../../redux/reducers/reducers";
import { InternetExplorer } from "../../shared/api/InternetExplorer";
import { API_CREATE_GOAL } from "../../shared/api/urls";
import { dateToInputFormat } from "../../shared/utils";

function CreateOrEditGoal({
  toggleSidePane,
  id,
  showNotification,
  goals,
  putGoalInRedux,
  categories,
  updateInBackend,
}) {
  categories = categories === LOADING ? [] : categories;
  goals = goals === LOADING ? [] : goals;
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const inEditMode = id;

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const setError = (message) => {
    showNotification({ show: true, good: false, message });
  };

  const sendToBackend = () => {
    const { title, dueBy, description, category } = form;
    showNotification({});

    if (!title || !description || !category)
      return setError(
        "Please provide values for title, description, and category..."
      );
    if (!dueBy)
      return setError(
        "Select the date that you would like to complete this..."
      );

    const foundCategory = categories.find((c) => c.name === category);
    form.categories = [foundCategory._id];
    setLoading(true);

    if (inEditMode)
      return updateInBackend({ id, data: form, cb: () => setLoading(false) });

    InternetExplorer.post({
      url: API_CREATE_GOAL,
      body: form,
    }).then((response) => {
      setLoading(false);
      if (!response.success) return setError(response.error);
      putGoalInRedux([response.data, ...goals]);
      setForm({});
    });
  };

  useEffect(() => {
    if (!id) return;
    let found = goals.find((g) => g._id.toString() === id.toString());

    let form = {};
    if (found) {
      let first = (found.categories || [])[0] || "";
      let cat = categories.find((c) => c._id.toString() === first.toString());
      form = {
        title: found.title,
        description: found.description,
        dueBy: found.dueBy,
        category: cat && cat.name,
      };
    }
    setForm(form);
  }, [id, goals, categories]);

  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={{ color: "black" }}>
        {inEditMode ? "EDIT GOAL" : "NEW GOAL"}
      </h1>
      <br />
      <TextField
        onChange={(text) => onChange("title", text)}
        label="Title"
        placeholder="Title of goal (40 chars)..."
        value={form.title}
        generic={{ max: 40 }}
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
        value={dateToInputFormat(form.dueBy)}
      />
      <Dropdown
        data={categories}
        labelExtractor={(c) => c.name}
        onChange={(value) => onChange("category", value)}
        label="Select Category"
        value={form.category}
      />
      <br />
      <Button
        loading={loading}
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

const mapStateToProps = (state) => {
  return { goals: state.goals, categories: state.categories };
};
export default connect(mapStateToProps)(CreateOrEditGoal);

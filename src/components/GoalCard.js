import React from "react";
import { useNavigate } from "react-router-dom";
import { LOADING } from "../redux/reducers/reducers";
import Checkbox from "./checkbox/Checkbox";

function GoalCard({
  done,
  onClick,
  edit,
  title,
  categories,
  categoriesList,
  markAsDone,
  _id,
  undo,
}) {
  const classes = onClick ? "underline touchable-opacity" : "";
  let list = [];
  if (categoriesList !== LOADING)
    list = (categoriesList || []).filter((cat) =>
      (categories || []).includes(cat._id.toString())
    );
  return (
    <div
      className={done ? "done" : ""}
      style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
    >
      <div className="staff-card" style={{ margin: 0, width: "100%" }}>
        {!done && <Checkbox style={{ marginBottom: 0 }} />}

        <div
          className={classes}
          style={{ margin: "0px 15px", color: "white" }}
          onClick={() => onClick && onClick()}
        >
          <small style={{ fontSize: 15 }}>
            <b>{title || ""}</b>
          </small>
          <br />
          {list.map((c, i) => (
            <small
              key={i.toString()}
              style={{ color: "var(--app-light-text)", marginRight: 3 }}
            >
              {c.name}
            </small>
          ))}
        </div>
        <small
          onClick={() => {
            if (done) return undo({ id: _id, undo: true }); // Undo
            edit && edit();
          }}
          className="touchable-opacity"
          style={{
            marginLeft: "auto",
            color: "var(--app-light-text)",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {done ? "Undo" : "Edit"}
        </small>
      </div>
      {!done && (
        <div
          className="task-done-btn touchable-opacity"
          onClick={() => markAsDone({ id: _id })}
        >
          <small>Done</small>
        </div>
      )}
    </div>
  );
}

export default GoalCard;

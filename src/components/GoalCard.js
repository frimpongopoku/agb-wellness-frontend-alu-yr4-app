import React from "react";
import { LOADING } from "../redux/reducers/reducers";
import { getAnimation, makeStringDate, smartString } from "../shared/utils";
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
  select,
  isSelected,
  createdAt,
}) {
  const classes = onClick ? "underline touchable-opacity" : "";
  let list = [];
  if (categoriesList !== LOADING)
    list = (categoriesList || []).filter((cat) =>
      (categories || []).includes(cat._id.toString())
    );
  return (
    <div
      className={`${done ? "done" : ""} ${getAnimation()}`}
      style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
    >
      <div className="staff-card" style={{ margin: 0, width: "100%" }}>
        {!done && (
          <Checkbox
            onChange={() => select(_id)}
            style={{ marginBottom: 0 }}
            checked={isSelected}
          />
        )}

        <div
          className={classes}
          style={{ margin: "0px 15px", color: "white" }}
          onClick={() => onClick && onClick()}
        >
          <small style={{ fontSize: 15 }}>
            <b>{smartString(title, 25) || ""}</b>
          </small>
          <br />
          {list.map((c, i) => (
            <small
              key={i.toString()}
              style={{
                color: "var(--app-light-text)",
                marginRight: 3,
                textTransform: "uppercase",
              }}
            >
              {c.name}
            </small>
          ))}
          <br />
          <small>
            {" "}
            <b>By {makeStringDate(createdAt)}</b>
          </small>
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

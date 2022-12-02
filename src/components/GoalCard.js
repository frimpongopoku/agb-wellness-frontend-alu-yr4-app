import React from "react";
import Checkbox from "./checkbox/Checkbox";

function GoalCard({ done }) {
  return (
    <div
      className={done ? "done" : ""}
      style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
    >
      <div className="staff-card" style={{ margin: 0, width: "100%" }}>
        {!done && <Checkbox style={{ marginBottom: 0 }} />}

        <div style={{ margin: "0px 15px", color: "white" }}>
          <small style={{ fontSize: 15 }}>
            <b>No Red Meat</b>
          </small>
          <br />
          <small style={{ color: "var(--app-light-text)" }}>HEALTH</small>
        </div>
        <small
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
        <div className="task-done-btn touchable-opacity">
          <small>Done</small>
        </div>
      )}
    </div>
  );
}

export default GoalCard;
import React from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "./checkbox/Checkbox";

function GoalCard({ done, onClick, edit }) {
  const classes = onClick ? "underline touchable-opacity" : "";
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
            <b>No Red Meat</b>
          </small>
          <br />
          <small style={{ color: "var(--app-light-text)" }}>HEALTH</small>
        </div>
        <small
          onClick={() => {
            if (done) return; // Undo
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
        <div className="task-done-btn touchable-opacity">
          <small>Done</small>
        </div>
      )}
    </div>
  );
}

export default GoalCard;

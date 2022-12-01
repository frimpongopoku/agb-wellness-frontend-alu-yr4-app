import React from "react";
import Checkbox from "./checkbox/Checkbox";

function StaffCard() {
  return (
    <div className="staff-card">
      <img src="https://i.pravatar.cc/300" />
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small style={{ fontSize: 15 }}>
          <b>Whan Gi Chooms</b>
        </small>
        <br />
        <small style={{ color: "var(--app-light-text)" }}>
          lospongos@gmail.com
        </small>
      </div>
      <Checkbox style={{ marginBottom: 0, marginLeft: "auto" }} />
    </div>
  );
}

export default StaffCard;

import React from "react";
import Checkbox from "./checkbox/Checkbox";

function StaffCard({
  _id,
  image,
  firstName,
  lastName,
  email,
  select,
  isSelected,
}) {
  return (
    <div className="staff-card">
      <img src={image} />
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small style={{ fontSize: 15 }}>
          <b>{`${firstName} ${lastName || ""}`}</b>
        </small>
        <br />
        <small style={{ color: "var(--app-light-text)" }}>
          {email || "..."}
        </small>
      </div>
      <Checkbox
        checked={isSelected}
        onChange={() => select(_id)}
        style={{ marginBottom: 0, marginLeft: "auto" }}
      />
    </div>
  );
}

export default StaffCard;

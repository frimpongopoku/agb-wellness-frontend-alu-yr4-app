import React from "react";
import Checkbox from "./checkbox/Checkbox";

function CategoryCard({ edit, name }) {
  const initials = (name || "").substring(0, 2);
  return (
    <div className="categories-card">
      <div className="cat-img" style={{ textTransform: "uppercase" }}>
        {initials}
      </div>
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small style={{ fontSize: 15 }}>
          <b>{name || "..."}</b>
        </small>
        <small
          onClick={() => edit && edit()}
          className="underline touchable-opacity"
          style={{
            marginLeft: 10,
            fontWeight: "bold",
            color: "var(--app-light-text)",
          }}
        >
          Edit
        </small>
      </div>
      <Checkbox style={{ marginBottom: 0, marginLeft: "auto" }} />
    </div>
  );
}

export default CategoryCard;

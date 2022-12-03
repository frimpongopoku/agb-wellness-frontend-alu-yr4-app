import React from "react";
import Checkbox from "./checkbox/Checkbox";

function CategoryCard({ edit }) {
  return (
    <div className="categories-card">
      <div className="cat-img">GH</div>
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small
          onClick={() => edit && edit()}
          style={{ fontSize: 15 }}
          className="underline touchable-opacity"
        >
          <b>Whan Gi Chooms</b>
        </small>
      </div>
      <Checkbox style={{ marginBottom: 0, marginLeft: "auto" }} />
    </div>
  );
}

export default CategoryCard;

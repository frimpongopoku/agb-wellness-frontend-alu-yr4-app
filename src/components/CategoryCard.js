import React from "react";
import Checkbox from "./checkbox/Checkbox";

function CategoryCard() {
  return (
    <div className="categories-card">
      <img src="https://i.pravatar.cc/300" />
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small style={{ fontSize: 15 }}>
          <b>Whan Gi Chooms</b>
        </small>
      </div>
      <Checkbox style={{ marginBottom: 0, position: "absolute", right: 10 }} />
    </div>
  );
}

export default CategoryCard;

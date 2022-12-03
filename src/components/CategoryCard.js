import React from "react";
import Checkbox from "./checkbox/Checkbox";

function CategoryCard() {
  return (
    <div className="categories-card">
      <div className="cat-img">
        GH
      </div>
      {/* <img src="https://i.pravatar.cc/300" /> */}
      <div style={{ margin: "0px 15px", color: "white" }}>
        <small style={{ fontSize: 15 }}>
          <b>Whan Gi Chooms</b>
        </small>
      </div>
      <Checkbox style={{ marginBottom: 0, marginLeft: "auto" }} />
    </div>
  );
}

export default CategoryCard;

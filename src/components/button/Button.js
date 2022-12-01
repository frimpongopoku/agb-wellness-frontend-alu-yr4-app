import React from "react";
import "./button.css";
function Button({ children, loading }) {
  return (
    <div className="app-btn touchable-opacity">
      {loading && <i className="fa fa-spinner fa-spin" />}
      <span>{children || "New Button Here"}</span>
    </div>
  );
}

export default Button;

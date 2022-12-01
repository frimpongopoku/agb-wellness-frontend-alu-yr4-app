import React from "react";
import "./button.css";
function Button({ children, loading, style, className }) {
  return (
    <div
      style={style || {}}
      className={` app-btn touchable-opacity ${className || ""}`}
    >
      {loading && <i className="fa fa-spinner fa-spin" />}
      <span>{children || "New Button Here"}</span>
    </div>
  );
}

export default Button;

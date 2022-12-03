import React from "react";
import "./button.css";
function Button({ children, loading, style, className, onClick, accent }) {
  style = accent
    ? { background: "var(--app-yellow)", color: "black", ...(style || {}) }
    : style || {};
  return (
    <div
      onClick={() => onClick && onClick()}
      style={style}
      className={` app-btn touchable-opacity ${className || ""}`}
    >
      {loading && <i className="fa fa-spinner fa-spin" />}
      <span>{children || "New Button Here"}</span>
    </div>
  );
}

export default Button;

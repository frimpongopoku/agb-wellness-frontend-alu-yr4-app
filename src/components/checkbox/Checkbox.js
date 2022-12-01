import React from "react";
import "./checkbox.css";
function Checkbox({ label, checked, onChange, style, className, labelStyle }) {
  return (
    <div
      style={style || {}}
      className={`app-checkbox-wrapper touchable-opacity ${className || ""}`}
      onClick={() => onChange && onChange()}
    >
      <div className="app-checkbox">
        {checked && <i className=" fa fa-check" />}
      </div>
      <small style={labelStyle || {}}>{label}</small>
    </div>
  );
}

export default Checkbox;

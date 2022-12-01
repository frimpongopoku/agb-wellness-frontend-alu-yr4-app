import React from "react";
import "./checkbox.css";
function Checkbox({
  label = "Checkbox label here",
  checked,
  onChange,
  style,
  className,
  labelStyle,
}) {
  return (
    <div
      className="app-checkbox-wrapper touchable-opacity"
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

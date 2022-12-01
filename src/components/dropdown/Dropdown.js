import React from "react";
import "./dropdown.css";
function Dropdown({ onChange, data, label, dataExtractor }) {
  return (
    <div>
      {label && (
        <div className="textfield-label">
          {" "}
          <small>{label}</small>
        </div>
      )}
      <div className="drop-root">
        <select
          onChange={(e) => onChange && onChange(e.target.value)}
          className="drop-main"
          placeholder="Select something right now..."
        >
          {(data || []).map((d, index) => (
            <option key={index.toString()}>
              {(dataExtractor && dataExtractor(d)) || d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;

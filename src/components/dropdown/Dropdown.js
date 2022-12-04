import React from "react";
import "./dropdown.css";
function Dropdown({ onChange, data, label, valueExtractor, labelExtractor }) {
  const getLabel = (item) => {
    if (labelExtractor) return labelExtractor(item);
    return item.toString();
  };
  const getValue = (item) => {
    if (valueExtractor) return valueExtractor(item);
    return item.toString();
  };
  
  return (
    <div>
      {label && (
        <div className="textfield-label">
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
            <option key={index.toString()}>{getLabel(d)}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;

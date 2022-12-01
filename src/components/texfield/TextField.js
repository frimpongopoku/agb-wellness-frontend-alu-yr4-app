import React from "react";
import "./textfield.css";

function TextField({
  label,
  type,
  placeholder = "Enter content here...",
  className,
}) {
  return (
    <div style={{ marginBottom: 10 }}>
      {label && (
        <div className="textfield-label">
          {" "}
          <small>{label}</small>
        </div>
      )}
      <div>
        <input
          type={type || "text"}
          className={`textfield ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextField;

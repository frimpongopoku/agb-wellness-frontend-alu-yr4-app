import React from "react";
import "./textfield.css";

function TextField({
  label,
  type,
  placeholder = "Enter content here...",
  className,
  onChange,
  generic,
  textarea,
  value,
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
        {textarea ? (
          <textarea
            onChange={(e) => onChange && onChange(e.target.value)}
            type={type || "text"}
            className={`textfield ${className}`}
            placeholder={placeholder}
            value={value || ""}
            rows="7"
            {...(generic || {})}
          >
            {value}
          </textarea>
        ) : (
          <input
            onChange={(e) => onChange && onChange(e.target.value)}
            type={type || "text"}
            className={`textfield ${className}`}
            placeholder={placeholder}
            value={value || ""}
            {...(generic || {})}
          />
        )}
      </div>
    </div>
  );
}

export default TextField;

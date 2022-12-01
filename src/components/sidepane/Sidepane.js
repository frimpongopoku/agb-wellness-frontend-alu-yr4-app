import React from "react";
import "./sidepane.css";
function Sidepane({ children, show }) {
  if (!show) return <></>;
  return (
    <div className="side-root">
      <div className="side-blanket"></div>
      <div className="side-content">
        <div className="side-card">{children}</div>
      </div>
    </div>
  );
}

export default Sidepane;

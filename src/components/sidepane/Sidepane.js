import React from "react";
import "./sidepane.css";
function Sidepane({ component, show }) {
  if (!show) return <></>;
  return (
    <div className="side-root">
      <div className="side-blanket"></div>
      <div className="side-content ">
        <div className="side-card slide-from-left-anime">{component}</div>
      </div>
    </div>
  );
}

export default Sidepane;
